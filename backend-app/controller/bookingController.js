import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Booking } from "../models/bookingSchema.js";
import { User } from "../models/userSchema.js";

export const postBooking = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    booking_date,
    department,
    vendor_firstName,
    vendor_lastName,
    hasVisited,
    address,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !booking_date ||
    !department ||
    !vendor_firstName ||
    !vendor_lastName ||
    !address
  ) {
    return next(new ErrorHandler("Please fill all the details!", 400));
  }

  const isConflict = await User.find({
    firstName: vendor_firstName,
    lastName: vendor_lastName,
    role: "Vendor",
    vendorDepartment: department,
  });
  if (isConflict.length === 0) {
    return next(new ErrorHandler("Vendor not found", 404));
  }

  if (isConflict.length > 1) {
    return next(
      new ErrorHandler(
        "Vendors Conflict! Please contact throufh email or phone!",
        400
      )
    );
  }
  const vendorId = isConflict[0]._id;
  const clientId = req.user._id;
  const booking = await Booking.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    booking_date,
    department,
    vendor: {
      firstName: vendor_firstName,
      lastName: vendor_lastName,
    },
    hasVisited,
    address,
    vendorId,
    clientId,
  });
  res.status(200).json({
    success: true,
    booking,
    message: "Booking request sent successfully!",
  });
});

export const getAllBookings = catchAsyncErrors(async (req, res, next) => {
  const bookings = await Booking.find();
  res.status(200).json({
    success: true,
    bookings,
  });
});
export const updateBookingStatus = catchAsyncErrors(
  async (req, res, next) => {
    const { id } = req.params;
    let booking = await Booking.findById(id);
    if (!booking) {
      return next(new ErrorHandler("No Bookings found!", 404));
    }
    booking = await Booking.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Booking Status Updated!",
    });
  }
);
export const deleteBooking = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const booking = await Booking.findById(id);
  if (!booking) {
    return next(new ErrorHandler("No Booking Found!", 404));
  }
  await booking.deleteOne();
  res.status(200).json({
    success: true,
    message: "Booking Deleted!",
  });
});

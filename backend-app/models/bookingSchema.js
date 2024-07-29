import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import validator from "validator";

const bookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name Is Required!"],
    minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name Is Required!"],
    minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Is Required!"],
    minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
  },
  nic: {
    type: String,
    required: [true, "Aadhar number is required!"],
    minLength: [12, "Aadhar number must contain only 12 Digits!"],
    maxLength: [12, "Aadhar must contain only 12 Digits!"],
  },
  dob: {
    type: Date,
    required: [true, "DOB Is Required!"],
  },
  gender: {
    type: String,
    required: [true, "Gender Is Required!"],
    enum: ["Male", "Female"],
  },
  booking_date: {
    type: String,
    required: [true, "Booking Date Is Required!"],
  },
  department: {
    type: String,
    required: [true, "Department Name Is Required!"],
  },
  vendor: {
    firstName: {
      type: String,
      required: [true, "Vendor Name Is Required!"],
    },
    lastName: {
      type: String,
      required: [true, "Vendor Name Is Required!"],
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: [true, "Address Is Required!"],
  },
  vendorId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Vendor Id Is Invalid!"],
  },
  clientId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Client Id Is Required!"],
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const Booking = mongoose.model("Booking", bookingSchema);

import express from "express";
import {
  deleteBooking,
  getAllBookings,
  postBooking,
  updateBookingStatus,
} from "../controller/bookingController.js";
import {
  isAdminAuthenticated,
  isClientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isClientAuthenticated, postBooking);
router.get("/getall", isAdminAuthenticated, getAllBookings);
router.put("/update/:id", isAdminAuthenticated, updateBookingStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteBooking);

export default router;

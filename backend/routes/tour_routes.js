import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getAllTours,
  getUpcomingTours,
  getBookingClosedTours,
  getCompletedTours,
  getSingleTour,
  bookingTour,
  closeBooking,
  completeTour,
  getBookedTourByTourIdAndUserId,
  checkBookingbyUser,
} from "../controllers/tour_controllers.js";

const router = express.Router();

router.route("/").get(getAllTours);
router.get("/upcoming-tours", getUpcomingTours);
router.get("/booking-closed", getBookingClosedTours);
router.get("/completed-tours", getCompletedTours);
router.get("/:id", getSingleTour);
router.post("/create-tour", createTour);
router.patch("/update-tour/:id", updateTour);
router.delete("/delete-tour/:id", deleteTour);
router.post("/booking-tour/:id", bookingTour);
router.patch("/close-booking/:id", closeBooking);
router.patch("/complete-tour/:id", completeTour);
router.get("/booked-tour/:tourId/:userId", getBookedTourByTourIdAndUserId);
router.get("/check-booking/:userId", checkBookingbyUser);

export default router;

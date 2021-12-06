import express from "express";
import { createTour, getAllTours, getUpcomingTours, getSingleTour } from "../controllers/tour_controllers.js";


const router = express.Router();

router.route("/").get(getAllTours);
router.get("/upcoming-tours", getUpcomingTours);
// router.get("/booking-closed", tourController.getBookingClosedTours);
// router.get("/completed-tours", tourController.getCompletedTours);
router.get("/:id", getSingleTour);
router.post("/create-tour", createTour);
// tourRouter.patch("/update-tour/:id", tourController.updateTour);
// tourRouter.delete("/delete-tour/:id", tourController.deleteTour);

export default router;

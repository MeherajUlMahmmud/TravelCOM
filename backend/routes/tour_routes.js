const express = require('express');
const tourRouter = express.Router();

const tourController = require('../controllers/tour_controllers');

tourRouter.get("/upcoming-tours", tourController.getUpcomingTours);
tourRouter.get("/booking-closed", tourController.getBookingClosedTours);
tourRouter.get("/completed-tours", tourController.getCompletedTours);
tourRouter.get("/tour/:id", tourController.getSingleTour);
tourRouter.post("/create-tour", tourController.createTour);
tourRouter.patch("/update-tour/:id", tourController.updateTour);
tourRouter.delete("/delete-tour/:id", tourController.deleteTour);

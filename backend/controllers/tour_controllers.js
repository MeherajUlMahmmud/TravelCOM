import mongoose from "mongoose";
import TourModel from "../models/TourModel.js";

// GET all tours
export const getAllTours = async (req, res) => {
  try {
    const tours = await TourModel.find();
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// GET upcoming tours
export const getUpcomingTours = async (req, res) => {
  try {
    const tours = await TourModel.find({
      bookingOpen: true,
    });
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// GET booking closed tours
export const getBookingClosedTours = async (req, res) => {
  try {
    const tours = await TourModel.find({
      bookingOpen: false,
    });
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// GET completed tours
export const getCompletedTours = async (req, res) => {
  try {
    const tours = await TourModel.find({
      bookingOpen: false,
      isCompleted: true,
    });
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// GET single tour
export const getSingleTour = async (req, res) => {
  try {
    const tour = await TourModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// POST new tour
export const createTour = async (req, res) => {
  console.log(req.body.userId);
  const tour = new TourModel({
    id: new mongoose.Types.ObjectId(),
    userId: req.body.userId,
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    image: req.body.image,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    duration: req.body.duration,
  });
  await tour.save();
  res.status(201).json({
    status: "success",
    data: tour,
  });
};

// PUT update tour
export const updateTour = async (req, res) => {
  try {
    const tour = await TourModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// DELETE tour
export const deleteTour = async (req, res) => {
  try {
    await TourModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

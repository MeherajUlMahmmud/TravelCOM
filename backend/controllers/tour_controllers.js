import mongoose from "mongoose";
import BookingModel from "../models/BookingModel.js";
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
      data: tours,
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
      isCompleted: false,
    });
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: tours,
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
      data: tours,
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
  const tour = new TourModel({
    id: new mongoose.Types.ObjectId(),
    userId: req.body.userId,
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    image: req.body.image,
    startDate: Date.parse(req.body.startDate),
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
  // try {
  const { id } = req.params;
  console.log(req.body.name);
  console.log(req.body.description);
  console.log(req.body.location);
  console.log(req.body.image);
  console.log(req.body.startDate);
  console.log(req.body.endDate);
  console.log(req.body.duration);
  const tour = await TourModel.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      image: req.body.image,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      duration: req.body.duration,
    },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    data: tour,
  });
  // } catch (err) {
  //   res.status(404).json({
  //     status: "fail",
  //     message: err,
  //   });
  // }
};

// DELETE tour
export const deleteTour = async (req, res) => {
  const { id } = req.params;
  await TourModel.findByIdAndDelete(id);
  try {
    await TourModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const bookingTour = async (req, res) => {
  const { tourId, userId, paymentMethod, phone, transactionID } = req.body;
  const booking = new BookingModel({
    id: new mongoose.Types.ObjectId(),
    userId: userId,
    tourId: tourId,
    paymentMethod: paymentMethod,
    phone: phone,
    transactionId: transactionID,
  });
  await booking.save();
  res.status(201).json({
    status: "success",
    data: booking,
  });
};

export const completeTour = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  // try {
    const tour = await TourModel.findByIdAndUpdate(
      id,
      {
        isCompleted: true,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: tour,
    });
  // } catch (err) {
  //   res.status(404).json({
  //     status: "fail",
  //     message: err,
  //   });
  // }
};

export const closeBooking = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const tour = await TourModel.findByIdAndUpdate(
      id,
      {
        bookingOpen: false,
      },
      { new: true }
    );
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

export const getBookedTourByTourIdAndUserId = async (req, res) => {
  const { tourId, userId } = req.params;
  try {
    const tour = await BookingModel.findOne({
      userId: userId,
      tourId: tourId,
    });
    res.status(200).json({
      status: "success",
      data: tour !== null ? true : false,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

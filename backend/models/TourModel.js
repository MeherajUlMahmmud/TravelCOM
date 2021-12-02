const mongoose  = require('mongoose');
var Schema = mongoose.Schema;

const TourModel = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  bookingOpen: {
    type: Boolean,
    default: true,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TourModel", TourModel);

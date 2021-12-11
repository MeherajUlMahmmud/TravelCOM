import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  tourId: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const BookingModel = mongoose.model("BookingModel", BookingSchema);
export default BookingModel;

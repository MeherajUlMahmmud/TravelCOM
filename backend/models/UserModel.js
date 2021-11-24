import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("UserModel", UserModel);

export default UserModel;

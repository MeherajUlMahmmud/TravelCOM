import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    max: 120,
  },
  profile_picture: {
    type: String,
    default:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
  },
  phone: {
    type: String,
    max: 15,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  location: {
    type: String,
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
});

const UserModel = mongoose.model("UserModel", UserModel);

export default UserModel;

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
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
  profession: {
    type: String,
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

const UserModel = mongoose.model("UserModel", UserSchema);
export default UserModel;

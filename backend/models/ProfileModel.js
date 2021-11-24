import mongoose from "mongoose";

const ProfileModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
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
    max: 20,
  },
  location: {
    type: String,
  },
  social: {
    facebook: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
  },
});

const ProfileModel = mongoose.model("ProfileModel", ProfileModel);

export default ProfileModel;

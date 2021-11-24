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

import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";

// GET user details
export const getUserDetails = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await UserModel.findOne({ uid: uid });
    res.status(200).json({
      status: "success",
      results: user.length,
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// POST create user
export const createUser = async (req, res) => {
  const user = new UserModel({
    id: new mongoose.Types.ObjectId(),
    uid: req.body.uid,
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  });
  try {
    await user.save();
    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, bio, profession, picture, location, facebook, instagram } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post found");
  }
  const data = {
    _id: id,
    name,
    bio,
    profile_picture: picture,
    profession,
    location,
    facebook,
    instagram,
  };
  await UserModel.findByIdAndUpdate(id, data, {
    new: true,
  }).then((user) => {
    res.status(200).json({
      status: "success",
      data: user,
    });
  });
};

import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";

// GET user details
export const getUserDetails = async (req, res) => {
  try {
    const { uid } = req.params;
    console.log(uid);
    const user = await UserModel.findOne({ uid: uid });
    // console.log(user);
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

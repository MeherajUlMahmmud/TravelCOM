const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");

// GET user details
const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await UserModel.findById({ id: userId });
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({
            status: "success",
            results: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

// POST create user
const createUser = async (req, res) => {
  const user = new UserModel({
    id: new mongoose.Types.ObjectId(),
    uid: req.body.uid,
    name: req.body.name,
    email: req.body.email,
  });
  try {
    await user.save();
    console.log(user);
    res.status(201).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserDetails,
};

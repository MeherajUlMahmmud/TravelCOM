const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/user_controllers");

userRouter.get("/", userController.getAllUsers);
userRouter.post("/create-user", userController.createUser);
// userRouter.patch("/update-user/:id", userController.updateUser);
userRouter.get("/user/:userId", userController.getUserDetails);

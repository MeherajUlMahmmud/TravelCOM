import express from "express";
import { getAllUsers, createUser, getUserDetails, updateUser } from "../controllers/user_controllers.js";

const router = express.Router();

// router.get("/", getAllUsers);
router.post("/create-user", createUser);
router.patch("/update-user/:id", updateUser);
router.get("/user/:uid", getUserDetails);

export default router;

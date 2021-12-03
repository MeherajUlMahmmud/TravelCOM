// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user_routes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", userRoutes);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server started on port ${port}`))
  )
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

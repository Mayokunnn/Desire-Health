/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const { Client, Worker, Organisation } = require("./model");
const { hash, compare } = require("bcrypt");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// require("dotenv").config();

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const MONGO_URI =
  "mongodb+srv://lukasio:rJYZ2NRas1Q00QAE@cluster0.w4nl6uh.mongodb.net/users";
mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});
// Route for user sign-in
app.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check client collection
    let user = await Client.findOne({ email });
    let userType = "client";

    // If user not found in client collection, check worker collection
    if (!user) {
      user = await Worker.findOne({ email });
      userType = "worker";
    }

    // If user not found in worker collection, check organisation collection
    if (!user) {
      user = await Organisation.findOne({ email });
      userType = "organisation";
    }

    // If user still not found, return error
    if (!user) {
      return res.status(404).json({
        message: "User not found. Please check your email and password. 😢",
        type: "error",
      });
    }

    // Compare the user-entered password with the hashed password in the database
    const passwordMatch = await compare(password, user.password);

    // If passwords don't match, return error
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Incorrect password. Please check your email and password. ⚠️",
        type: "error",
      });
    }

    // Passwords match, sign in successful
    res.status(200).json({
      message: "Sign in successful! Welcome back. 🎉",
      userType,
      user, // Optionally, you can send user details in the response
    });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route for user sign-up
app.post("/api/signup", async (req, res) => {
  try {
    const { email, password, userType, ...userData } = req.body;

    // Check if the email has been used before in any user type
    const existingUser =
      (await Client.findOne({ email })) ||
      (await Worker.findOne({ email })) ||
      (await Organisation.findOne({ email }));
    if (existingUser) {
      return res.status(409).json({
        message:
          "Email already in use! Please use a different email address. 😄",
        type: "warning",
      });
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    let newUser;

    // Determine the user type based on userType field
    switch (userType) {
      case "client":
        newUser = new Client({ email, password: hashedPassword, ...userData });
        break;
      case "worker":
        newUser = new Worker({ email, password: hashedPassword, ...userData });
        break;
      case "organisation":
        newUser = new Organisation({
          email,
          password: hashedPassword,
          ...userData,
        });
        break;
      default:
        return res.status(400).json({
          message: "Invalid user type! 😢",
          type: "error",
        });
    }

    // Save the new user to the appropriate collection
    await newUser.save();

    res.status(201).json(newUser); // Return newly created user with status code 201
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

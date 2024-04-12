/* eslint-disable no-undef */


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors)

let users = [
  { id: 1, name: "Areola Kelvin", email: "kareola.com" },
  { id: 2, name: "Buhari Adeolu", email: "jjoco@gmail..com" },
];

// Get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Get a single user by ID
app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Create a new user
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1, 
    name: req.body.name, 
    email: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

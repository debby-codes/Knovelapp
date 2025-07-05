const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const router = express.Router();

// Create a user
router.post("/users", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    username: req.body.username,
    password: hashedPassword,
  });
  await user.save();
  res.status(201).send("User created");
});

// Read users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update user
router.put("/users/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send("User updated");
});

// Delete user
router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted");
});

module.exports = router;

const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create a user
const createUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    username: req.body.username,
    password: hashedPassword,
  });
  await user.save();
  res.status(201).send("User created");
};

// Read users
const readUser = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Update user
const updateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send("User updated");
};

// Delete user
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted");
};
module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};

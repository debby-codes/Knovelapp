const Cart = require("../models/userSchema");

// Protected route to add item to cart
 const authenticateToken= async (req, res) => {
  const cart = new Cart({ userId: req.user.id, products: req.body.products });
  await cart.save();
  res.status(201).send("Cart updated");
};

module.exports = authenticateToken;

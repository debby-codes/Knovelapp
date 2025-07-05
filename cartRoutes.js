const express = require("express");
const Cart = require("./models/Cart");
const router = express.Router();

// Protected route to add item to cart
router.post("/cart", authenticateToken, async (req, res) => {
  const cart = new Cart({ userId: req.user.id, products: req.body.products });
  await cart.save();
  res.status(201).send("Cart updated");
});

module.exports = router;

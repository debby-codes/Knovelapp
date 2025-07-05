const express = require("express");
const Product = require("./models/Product");
const router = express.Router();

// Create a product
router.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).send("Product created");
});

module.exports = router;

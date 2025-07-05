const Product = require("../models/productSchema");

// Create a product
const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).send("Product created");
};

module.exports = createProduct;

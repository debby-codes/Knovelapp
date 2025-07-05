const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  products: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }],
});

module.exports = mongoose.model("Cart", CartSchema);

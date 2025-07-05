const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CartSchema = new Schema(
  {
  userId: { type:Types.ObjectId,required: true, 
  },
  products: { productId: Types.ObjectId,
    quantity:Number },
},
{ timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);

const express = require("express");
const app = express();
const userRoutes = require("./router/userRouter");
const productRoutes = require("./router/productRouter");
const authRoutes = require("./router/authRouter");
const cartRoutes = require("./router/cartRouter");
const connectDB = require("./mongoDb/mongodb");
require("dotenv").config();
connectDB();
const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", authRoutes);
app.use("/api", cartRoutes);
// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

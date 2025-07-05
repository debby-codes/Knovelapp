const express = require('express');
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const cartRoutes = require("./cartRoutes");
const connectDB = require("./mongoDb/mongodb");
require("dotenv").config();
connectDB();
const app = express();
app.use(express.json());

const port = process.env.PORT 

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", authRoutes);
app.use("/api", cartRoutes);
// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
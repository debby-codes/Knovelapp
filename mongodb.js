const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to MongoDB");
  } catch (err) {
    console.log("error connecting to MongoDB", err);
  }
};
module.exports = connectDB;

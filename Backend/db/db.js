const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/uber");

    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
    process.exit(1);
  }
};


module.exports = connectDB;

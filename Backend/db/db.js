const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://variyapurv4211:purv@cluster0.eivrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
    process.exit(1);
  }
};


module.exports = connectDB;

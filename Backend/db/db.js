const mongoose = require("mongoose");

const connectdB =async () => {
  await mongoose.connect(process.env.DB_CONNECT)
  console.log("Connect to db");
};
module.exports = connectdB;

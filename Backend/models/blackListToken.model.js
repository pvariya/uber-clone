const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    expires: 86400,//24 hours expire
  },
})


const BlackListToken  = mongoose.model("BlackListToken", blackListTokenSchema);
module.exports = BlackListToken;
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");
const captainModel = require("../models/captain.model");
const BlackListToken = require("../models/blackListToken.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  const IsBlackListed = await userModel.findOne({ token: token });
  if (IsBlackListed) {
    return res.status(401).json({ message: "anuthorised" });
  }
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await BlackListToken.findById(decoded._id);
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
};

module.exports.authCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  const IsBlackListed = await BlackListToken.findOne({ token: token });
  if (IsBlackListed) {
    return res.status(401).json({ message: "anuthorised" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findOne(decoded._id);
    req.captain = captain;
    return next();
    } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
};

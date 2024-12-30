const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");
const captainModel = require("../models/captainmodel");
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

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  const isBlackListed = await BlackListToken.findOne({ token });
  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized. Token is blacklisted." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(404).json({ message: "Captain not found." });
    }
    req.captain = captain;
    return next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ message: "Invalid token." });
  }
};


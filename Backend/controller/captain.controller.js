const { validationResult } = require("express-validator");
const captainModel = require("../models/captainmodel");
const createCaptain = require("../services/captain.service");
const bcrypt = require("bcrypt");
const BlackListToken = require("../models/blackListToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const error = validationResult(req);
  console.log("Request Body:", req.body);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  
  
  const { fullname, email, password, vehicle } = req.body;
  const existingCaptain = await captainModel.findOne({ email});
  if (existingCaptain) {
      return res.status(400).json({
          message: "Failed to register captain",
          error: "Email already exists",
      });
  }
  if (!fullname || !fullname.firstname || !fullname.lastname) {
    return res.status(400).json({ message: "Full name is required" });
  }

  try {
    const hashpassword = await bcrypt.hash(password, 10);
    const captain = await createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashpassword,
      color: vehicle.color,
      plate: vehicle.plate,
      vehicleType: vehicle.vehicleType,
      capacity: vehicle.capacity,
    });
    const token = captain.generateAuthToken();
    res.status(201).json({ captain, token });
  } catch (error) {
    console.error("Error registering captain:", error);
    res.status(500).json({ message: "Failed to register captain", error: error.message });
  }
};

module.exports.loginCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;
  try {
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, captain.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token);
    return res
      .status(200)
      .json({ captain, token, message: "user logged in successfully" });
  } catch (error) {
    console.log("Error logging in captain:", error);
    res.status(500).json({ error: error });
  }
};

module.exports.getCaptainProfile = async (req, res) => {
  try {
    if (!req.captain) {
      return res.status(404).json({ error: "Captain not found" });
    }
    return res.status(200).json({ captain: req.captain });
  } catch (error) {
    console.error("Error fetching captain profile:", error);
    return res
      .status(500)
      .json({
        error: "An error occurred while retrieving the captain profile",
      });
  }
};

module.exports.logOutCaptain = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "No token provided for logout." });
    }
    await BlackListToken.create({ token })
    res.clearCookie("token");
    return res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "An error occurred during logout.", error: error.message });
  }
};


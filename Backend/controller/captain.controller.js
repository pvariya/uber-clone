const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const { createCaptain } = require("../services/captain.service");
const bcrypt = require("bcrypt");
const BlackListToken = require("../models/blackListToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { fullname, email, password, vehicle } = req.body;
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
    res
      .status(200)
      .json({ captain, token, message: "user logged in successfully" });
  } catch (error) {
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
    // Log the error for debugging
    console.error("Error fetching captain profile:", error);

    // Send a generic error message with a 500 status code
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
    await BlackListToken.create(token);
    res.clearCookies("token");
    res.status(200).json({ message: "Logged Out" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

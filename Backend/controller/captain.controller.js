const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const { createCaptain } = require("../services/captain.service");
const bcrypt = require("bcrypt");

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

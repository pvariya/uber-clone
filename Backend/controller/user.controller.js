const { validationResult } = require("express-validator");
const userModel = require("../models/user.models");
const userService = require("../services/user.service");
const blackListTokenModel = require("../models/blackListToken.model");

module.exports.registerUser = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createuser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
};

module.exports.loginUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ user, token });
};

module.exports.getUserProfile = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[0];
  res.clearCookie("token");
  await blackListTokenModel.create({ token });
  res.status(200).json({ message: "logged Out" });
};

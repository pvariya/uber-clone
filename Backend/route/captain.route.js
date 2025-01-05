const express = require("express");
const captainRaouter = express.Router();

const { body } = require("express-validator")
const {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logOutCaptain,
} = require("../controller/captain.controller")
const { authCaptain } = require("../middlewares/auth.middlewares")

// captainRaouter.post(
//   "/register",
//   [
//     body("email").isEmail().withMessage("invalid email"),

//     body("fullname.firstname")
//       .isLength({ min: 3 })
//       .withMessage("firstname must be at least 3 characters"),

//     body("password")
//       .isLength({ min: 6 })
//       .withMessage("password must be at least 6 characters"),

//     body("vehicle.color")
//       .isLength({ min: 3 })
//       .withMessage("color must be at least 3 characters"),

//     body("vehicle.plate")
//       .isLength({ min: 3 })
//       .withMessage("plate must be at least 3 characters"),

//     body("vehicle.capacity")
//       .isInt({ min: 1 })
//       .withMessage("capacity must be at least 1 "),

//       body("vehicle.vehicleType")
//       .isIn(["car", "motorcycle", "auto"])
//       .withMessage("Invalid vehicle type"),

//   ],
//   registerCaptain
// );;

captainRaouter.post(
  '/register',
  [
    body('fullname.firstname').notEmpty().withMessage('First name is required'),
    body('fullname.lastname').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('vehicle.color').notEmpty().withMessage('Vehicle color is required'),
    body('vehicle.plate').notEmpty().withMessage('Vehicle plate is required'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Vehicle capacity must be at least 1'),
    body('vehicle.vehicleType')
      .isIn(['car', 'motorcycle', 'auto'])
      .withMessage('Vehicle type must be one of: car, motorcycle, auto'),
  ],
  registerCaptain
);


captainRaouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 characters"),

  ],
  loginCaptain
);

captainRaouter.get("/profile", authCaptain, getCaptainProfile)
captainRaouter.post("/logout", authCaptain, logOutCaptain);
module.exports = captainRaouter;

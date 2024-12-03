const express = require("express");
const userRouter = express.Router();
const { body } = require("express-validator");
// const userController = require("../controller/user.controller");
const { authUser } = require("../middlewares/auth.middlewares");
const { logoutUser, getUserProfile, registerUser, loginUser } = require("../controller/user.controller");

userRouter.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),

    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("firstname must be at least 3 characters"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 characters"),
  ],
  registerUser
);

userRouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 3 })
      .withMessage("password must be at least 3 characters"),
  ],
loginUser
);

userRouter.get("/profile",authUser,getUserProfile);
userRouter.get("/logout",authUser,logoutUser)

module.exports = userRouter;

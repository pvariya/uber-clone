const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookies = require("cookie-parser");
const connectdB = require("./db/db");
const userRouter = require("./route/user.route");
const captainRaouter = require("./route/captain.route");

connectdB();
app.use(cors());
app.use(express.json());
app.use(cookies())
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/user", userRouter);
app.use("/captain",captainRaouter)
module.exports = app;

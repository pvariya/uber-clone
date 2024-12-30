const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const captainsSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Firstname must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Lastname must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  
  password: {
    type: String,
    required: true,
    select: false,
  },
  soketId: {},
  status: {
    type: String,
    default: "inactive",
    enum: ["active", "inactive"],

  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Vehicle must be at least character long"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Vehicle plate must be at least 6 characters long"],
      // unique: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1 person"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },
  location: {
    latitude: {
      type: Number,

    },
    longitude: {
      type: Number,
    }
  }
});

captainsSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
  return token;
};


captainsSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

captainsSchema.static.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captainModel', captainsSchema);
module.exports = captainModel
const captainModel = require("../models/captainmodel");

const createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  capacity,
  plate,
  vehicleType,
}) => {
  if (!firstname || !lastname || !email || !password || !color || !capacity || !plate || !vehicleType) {
    throw new Error("All fields are required");
  }
  try {
    const captain = new captainModel({
      fullname: { firstname, lastname },
      email,
      password,
      vehicle: { color, capacity, plate, vehicleType },
    });
    await captain.save();
    return captain;
  } catch (err) {
    console.error("Error creating captain:", err);
    throw err;
  }
};

module.exports = createCaptain;
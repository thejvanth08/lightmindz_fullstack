const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const User = require("../models/User");
const Doctor = require("../models/Doctor");

const authenticate = async (req, res, next) => {
  const token = req.cookies?.token;
  // console.log(token);
  if (token) {
    try { 

      const payload = jwt.verify(token, jwtSecret);
      req.user = payload;
      // // adding username
      if(payload.role == "user") {
        const user = await User.findOne({ _id: req.user.id });
        req.user.name = user?.details?.fullname;
      } else if(payload.role == "doctor") {
        const doctor = await Doctor.findOne({ _id: req.user.id });
        req.user.name = doctor?.details?.fullname;
      }
      next();
    } catch (err) {
      console.log(err);
      throw err;
    }
  } else {
    console.log("token not found");
    throw new Error("token not found");
  }
};

module.exports = authenticate;

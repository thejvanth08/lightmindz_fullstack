const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  const token = req.cookies?.token;

  if (token) {
    try {
      const payload = jwt.verify(token, jwtSecret);
      req.user = payload;
      // adding username
      const user = await User.findOne({ _id: req.user.id });
      req.user.name = user.details.fullname;
      next();
    } catch (err) {
      console.log("invalid token");
      throw new Error("invalid token");
    }
  } else {
    console.log("token not found");
    throw new Error("token not found");
  }
};

module.exports = authenticate;

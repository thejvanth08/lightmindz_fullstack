const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authenticate = (req, res, next) => {
  const token = req.cookies?.token;

  if (token) {
    try {
      const payload = jwt.verify(token, jwtSecret);
      req.user = payload;
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

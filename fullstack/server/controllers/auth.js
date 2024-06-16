const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const createdUser = await User.create({ email, password });
    console.log("created user in db");
    const payload = {
      id: createdUser._id,
      email: createdUser.email,
    };
    // sign new jwt
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "7 days" });
    res.status(201).cookie("token", token).json({ id: createdUser._id });
  } catch (err) {
    if (err.code === 11000) {
      res.status(422).json({ error: "Account with this email already exists" });
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find => results in array, findOne -> single object
    const foundUser = await User.findOne({ email: email });

    // check provided password with original password
    if (foundUser.password == password) {
      // sign new jwt
      const payload = {
        id: foundUser._id,
        email: foundUser.email,
      };
      const token = jwt.sign(payload, jwtSecret, { expiresIn: "7 days" });
      res.status(201).cookie("token", token).json({ id: foundUser._id });
    } else {
      res.status(401).json({ error: "wrong password" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "user not found" });
  }
};

module.exports = {
  signup,
  login,
};

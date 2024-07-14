const User = require("../models/User");
const Doctor = require("../models/Doctor");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const signup = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    let createdAccount;
    if(role == "user") {
      createdAccount = await User.create({ email, password });
      console.log("created user in db");
    } else if(role == "doctor") {
      createdAccount = await Doctor.create({ email, password });
      console.log("created doctor in db");
    }
    const payload = {
      id: createdAccount._id,
      email: createdAccount.email,
      role: role
    };
    // sign new jwt
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "7 days" });
    res.status(201).cookie("token", token).json({ id: createdAccount._id , role: role });
  } catch (err) {
    if (err.code === 11000) {
      res.status(422).json({ error: "Account with this email already exists" });
    }
  }
};

const login = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    // find => results in array, findOne -> single object
    let foundAccount;
    if(role == "user") {
      foundAccount = await User.findOne({ email: email });
    } else if(role == "doctor") {
      foundAccount = await Doctor.findOne({ email: email });
    }

    // check provided password with original password
    if (foundAccount.password == password) {
      // sign new jwt
      const payload = {
        id: foundAccount._id,
        email: foundAccount.email,
        role: role
      };
      const token = jwt.sign(payload, jwtSecret, { expiresIn: "7 days" });
      res.status(201).cookie("token", token).json({ id: foundAccount._id, role: role });
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

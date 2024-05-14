const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const User = require("./models/User");

const PORT = process.env.PORT || 3000;

const app = express();

const dbUrl = process.env.MONGO_URL;
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(helmet());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("ok");
});

// to verify the user is logged-in to access the protected routes
// app.get("/verify-token", (req, res) => {
//   const token = req.cookies?.token;
//   if(token) {
//     console.log("token found");
//     const payload = jwt.verify(token, jwtSecret);
//     console.log(payload);
//     res.json(payload);
//   } else {
//     console.log("token not found");
//   }
// });

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const createdUser = await User.create({email, password});
    console.log("created user in db");
    const payload = {
      id: createdUser._id,
      email: createdUser.email
    };
    // sign new jwt
    const token = jwt.sign(payload, jwtSecret, {expiresIn: "1h"});
    res.status(201).cookie("token", token).json({ id: createdUser._id });
  } catch(err) {
    if(err.code === 11000) {
      res.status(422).json({ error: "Account with this email already exists"});
    }
  }
});

app.post("/add-details", async (req, res) => {
  const details = req.body;
  try {
    const payload = await getUserPayload(req);
    const foundUser = await User.findOne({ _id: payload.id });
    foundUser.details = details;
    await foundUser.save();
    res.status(201).json("details added");
  } catch(err) {
    res.status(401).json("unauthorized access"); 
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // find => results in array, findOne -> single object
    const foundUser = await User.findOne({email: email});

    // check provided password with original password
    console.log("check: ", password, foundUser.password);
    if(foundUser.password == password) {
      // sign new jwt
      const payload = {
        id: foundUser._id,
        email: foundUser.email
      };
      const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
      res.status(201).cookie("token", token).json({ id: foundUser._id });
    } else {
      res.status(401).json({ error: "wrong password" });
    }
  } catch(err) {
    console.log(err);
    res.status(404).json({ error: "user not found" });
  }
});

async function start() {
  try {
    await mongoose.connect(dbUrl);
    console.log("connected to db");
  } catch(err) {
    console.log("could not connect to the db", err);
  }
  app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
  });
}

start();

async function getUserPayload(req) {
  return new Promise((resolve, reject) => {
    const token = req.cookies?.token;
      if(token) {
        try {
          const payload = jwt.verify(token, jwtSecret);
          console.log("valid token");
          resolve(payload);
        } catch(err) {
          reject("invalid token");
          console.log(err);
        }
      } else {
        reject("token not found");
        console.log("token not found");
      }
  });
}
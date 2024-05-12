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

app.get("/", (req, res) => {
  res.send("ok");
});

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
    const token = jwt.sign(payload, jwtSecret, {});
    res.status(201).cookie("token", token).json({ id: createdUser._id });
  } catch(err) {
    if(err.code === 11000) {
      res.status(422).json({ error: "Account with this email already exists"});
    }
  }
});

app.post("/add-details", async (req, res) => {

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
      const token = jwt.sign(payload, jwtSecret, {});
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

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const Sentiment = require("sentiment");
require("dotenv").config();

// middlewares
const removeWarning = require("./middleware/warning");

// routers
const authRouter = require("./routers/auth");
const moodsRouter = require("./routers/moods");

const User = require("./models/User");

const PORT = process.env.PORT || 3000;

const app = express();

const dbUrl = process.env.MONGO_URL;

// warning in client
app.use(removeWarning);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(helmet());
app.use(cookieParser());

function authenticate(req, res, next) {
  const token = req.cookies?.token;
  if (token) {
    try {
      const payload = jwt.verify(token, jwtSecret);
      console.log("valid token");
      req.user = payload;
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("token not found");
  }
  // pass the execution to actual route handler
  next();
}

app.get("/", (req, res) => {
  res.send("ok");
});

// signup & login
app.use("/auth", authRouter);
      
app.post("/verify-user", async (req, res) => {
  try {
    const payload = await getUserPayload(req);
    res.status(200).json({ status: "success", payload });
  } catch(err) {
    res.status(401).json({ status: err });
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

app.use("/users/moods", moodsRouter);

app.post("/rasa/message", async (req, res) => {
  const { message } = req.body;

  try {
    const { data } = await axios.post("http://127.0.0.1:5005/webhooks/rest/webhook", {
      message: message,
    });
    // rasa response
    const rasaRes = data[0].text;
    res.status(201).json({ response: rasaRes })
  } catch(err) {
    res.status(400).json("error happened");
    console.log(err);
  }
});

const sentiment = new Sentiment();
app.post("/rasa/upload-chat", async (req, res) => {
  // verify the req
  try {
    const payload = await getUserPayload(req);
    const foundUser = await User.findOne({ _id: payload.id });
     const { userChat } = req.body;
     const userChatWithSentiment = userChat.map((msg, index) => {
       const { score, calculation, words, positive, negative } =
         sentiment.analyze(msg);
       return {
         message: msg,
         sentiment: { score, calculation, words, positive, negative },
       };
     });
     console.log(userChatWithSentiment);
     
  } catch (err) {
    console.log(err);
    res.status(400).json("cannot upload chat");
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
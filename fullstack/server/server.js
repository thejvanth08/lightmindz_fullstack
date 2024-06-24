const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const helmet = require("helmet");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// middlewares
const removeWarning = require("./middleware/warning");
const authenticate = require("./middleware/authenticate");
const handleError = require("./middleware/error-handler");

// routers
const authRouter = require("./routers/auth");
const usersRouter = require("./routers/users");

const PORT = process.env.PORT || 3000;
const dbUrl = process.env.MONGO_URL;

const app = express();

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

app.use("/auth", authRouter);
app.use("/users", authenticate, usersRouter);

app.use(handleError);

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

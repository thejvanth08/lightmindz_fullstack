const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

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

app.post("/signup", (req, res) => {
  const data = req.body;
  console.log(data);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
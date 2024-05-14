const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // makes it unique among all docs
  },
  password: {
    type: String,
    required: true
  },
  details: {
    type: Object
  }
});
// 2nd arg to Schema: { timestamps: true } -> add createdAt prop

const User = mongoose.model("User", userSchema);

module.exports = User;
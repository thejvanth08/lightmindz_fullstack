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
  },
  createdAt: {
    type: Date,
    // Date.now - function that returns the current time (it will be called by the mongoose during the creation of user)
    // Date.now() - returns the direct value (creation of schema)
    default: Date.now
  }
});
// 2nd arg to Schema: { timestamps: true } -> add createdAt prop

const User = mongoose.model("User", userSchema);

module.exports = User;
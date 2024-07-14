const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // makes it unique among all docs
  },
  password: {
    type: String,
    required: true,
  },
  details: {
    type: Object,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;

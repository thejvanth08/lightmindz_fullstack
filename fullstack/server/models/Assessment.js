const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Assessment = mongoose.model("Assessment", assessmentSchema);

module.exports = Assessment;
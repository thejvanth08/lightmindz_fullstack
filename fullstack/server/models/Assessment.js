const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assessmentId: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Assessment = mongoose.model("Assessment", assessmentSchema);

module.exports = Assessment;
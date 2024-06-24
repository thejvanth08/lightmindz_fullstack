const mongoose = require("mongoose");

// ref: 'User' tells Mongoose which model/collection this ObjectId references.
const moodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true
  },
  mood: {
    type: String,
    enum: ["happy", "good", "okay", "bore", "bad"]
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;
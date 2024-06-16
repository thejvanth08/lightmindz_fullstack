const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  mood: {
    type: String,
    enum: ["happy", "good", "okay", "bore", "bad"],
    required: true,
  },
  date: {
    type: String,
    required: true,
    set: function (value) {
      // Ensure the date is stored in YYYY-MM-DD format
      return value.toISOString().split("T")[0];
    },
  },
});

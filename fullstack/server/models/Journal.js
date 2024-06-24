const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  analysis: {
    type: Object
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  },
});

const Journal = mongoose.model("DailyJournal", journalSchema);

module.exports = Journal;

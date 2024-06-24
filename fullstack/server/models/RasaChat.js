const mongoose = require("mongoose");

const rasaChatSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  userMessages: [String],
  analysis: Object,
  timestamp : {
    type: Date,
    default: Date.now
  }
});

const RasaChat = mongoose.model("RasaChat", rasaChatSchema);

module.exports = RasaChat;
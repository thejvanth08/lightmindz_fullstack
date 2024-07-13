const mongoose = require("mongoose");

const forumChatSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  messageData: {
    type: Object,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ForumChat = mongoose.model("ForumChat", forumChatSchema);

module.exports = ForumChat;
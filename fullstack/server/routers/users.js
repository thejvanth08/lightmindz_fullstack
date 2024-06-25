const express = require("express");
const router = express.Router();
const { verifyToken, addUserDetails, messageRasa, uploadChat, uploadMood, uploadJournal, uploadAssessment, getMoods, getAssessments, getJournals, getChatbotChats } = require("../controllers/users");

// these routes are protected
// to verify the jwt token
router.post("/verify", verifyToken);
router.post("/add-details", addUserDetails);
router.post("/chatbot/message", messageRasa);
router.post("/chatbot/terminate", uploadChat);
router.post("/mood-tracker", uploadMood);
router.post("/journal", uploadJournal);
router.post("/assessment/:id", uploadAssessment);
router.get("/mood-tracker", getMoods);
router.get("/assessments", getAssessments);
router.get("/journals", getJournals);
router.get("/chatbot/chats", getChatbotChats);

module.exports = router;
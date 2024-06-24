const express = require("express");
const router = express.Router();
const { verifyToken, addUserDetails, messageRasa, uploadChat } = require("../controllers/users");

// these routes are protected
// to verify the jwt token
router.post("/verify", verifyToken);
router.post("/add-details", addUserDetails);
router.post("/rasa/message", messageRasa);
router.post("/rasa/upload-chat", uploadChat);


module.exports = router;
const axios = require("axios");
const Sentiment = require("sentiment");
const User = require("../models/User");

const verifyToken = async (req, res) => {
  res.status(200).json({ status: "success", payload });
};

const addUserDetails = async (req, res) => {
  const details = req.body;
  try {
    const foundUser = await User.findOne({ _id: payload.id });
    foundUser.details = details;
    await foundUser.save();
    res.status(201).json("details added");
  } catch (err) {
    console.log(err);
  }
};

const messageRasa = async (req, res) => {
  const { message } = req.body;
  try {
    const { data } = await axios.post(
      "http://127.0.0.1:5005/webhooks/rest/webhook",
      {
        message: message,
      }
    );
    // rasa response
    const rasaResponse = data[0].text;
    res.status(201).json({ response: rasaResponse });
  } catch (err) {
    res.status(400).json("error happened");
    console.log(err);
  }
};

// analyze the chat & save to db 
const uploadChat = async (req, res) => {
  try {
    const foundUser = await User.findOne({ _id: payload.id });
    const { userChat } = req.body;
    const userChatWithSentiment = userChat.map((msg, index) => {
      const sentiment = new Sentiment();
      const { score, calculation, words, positive, negative } =
        sentiment.analyze(msg);
      return {
        message: msg,
        sentiment: { score, calculation, words, positive, negative },
      };
    });
    console.log(userChatWithSentiment);
  } catch (err) {
    console.log(err);
    res.status(400).json("cannot upload chat");
  }
};

module.exports = { verifyToken, addUserDetails, messageRasa, uploadChat };
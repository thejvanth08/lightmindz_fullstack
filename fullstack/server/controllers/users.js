const axios = require("axios");
const Sentiment = require("sentiment");
const User = require("../models/User");
const RasaChat = require("../models/RasaChat");

const verifyToken = async (req, res) => {
  // req.user contains the payload of jwt
  res.status(200).json({ status: "success", payload: req.user });
};

const addUserDetails = async (req, res) => {
  const details = req.body;
  try {
    const foundUser = await User.findOne({ _id: req.user.id });
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
  const user = req.user;
  try {
    const { userChat } = req.body;
    console.log(userChat);
    const userChatString = userChat.join(",");
    const sentiment = new Sentiment();
    const analysis = sentiment.analyze(userChatString);
    // const userChatWithSentiment = userChat.map((msg, index) => {
    //   const sentiment = new Sentiment();
    //   const { score, calculation, words, positive, negative } =
    //     sentiment.analyze(msg);
    //   return {
    //     message: msg,
    //     sentiment: { score, calculation, words, positive, negative },
    //   };
    // });
    const result = await RasaChat.create({
      userId: user.id,
      userMessages: userChat,
      analysis: analysis
    });
    console.log(result);
  } catch (err) {
    console.log(err);
    res.status(500).json("cannot upload chat");
  }
};



module.exports = { verifyToken, addUserDetails, messageRasa, uploadChat };
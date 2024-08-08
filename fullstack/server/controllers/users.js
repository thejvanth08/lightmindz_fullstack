const axios = require("axios");
const Sentiment = require("sentiment");
const User = require("../models/User");
const RasaChat = require("../models/RasaChat");
const Mood = require("../models/Mood");
const Journal = require("../models/Journal");
const Assessment = require("../models/Assessment");
const ForumChat = require("../models/ForumChat");

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
  const { chat } = req.body;
  console.log(chat);
  try {
    const { data } = await axios.post(process.env.OLLAMA_URL, chat);
    console.log(data);
    res.status(200).json({ response: data.response });
  } catch (err) {
    // res.status(400).json("error happened");
    // console.log(err);
  }
};

// analyze the chat & save to db
const uploadChat = async (req, res) => {
  try {
    const { userChat } = req.body;
    const userChatString = userChat.join(",");
    const analysis = analyzeSentiment(userChatString);
    // save in DB
    const result = await RasaChat.create({
      userId: req.user.id,
      userMessages: userChat,
      analysis: analysis,
    });
    // console.log(result);
    res.status(201).json("chat uploaded successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json("cannot upload chat");
  }
};

const uploadMood = async (req, res) => {
  const { mood } = req.body;
  try {
    const result = await Mood.create({
      userId: req.user.id,
      mood: mood,
    });
    res.status(201).json("mood uploaded successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json("mood not uploaded");
  }
};

const uploadJournal = async (req, res) => {
  const { content } = req.body;
  try {
    const analysis = analyzeSentiment(content);
    const result = await Journal.create({
      userId: req.user.id,
      content: content,
      analysis: analysis,
    });
    res.status(201).json("upload journal successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json("cannot upload journal");
  }
};

const uploadAssessment = async (req, res) => {
  const { score } = req.body;
  let { id } = req.params;
  id = Number(id);
  try {
    const result = await Assessment.create({
      userId: req.user.id,
      assessmentId: id,
      score: score,
    });
    res.status(201).json("uploaded assessment successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json("not uploaded assessment");
  }
};

const getMoods = async (req, res) => {
  const userId = req.user.id;
  try {
    const projection = { _id: 0, mood: 1, timestamp: 1 };
    const result = await Mood.find({ userId: userId }, projection);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("cannot get moods data");
  }
};

const getAssessments = async (req, res) => {
  const userId = req.user.id;
  try {
    const projection = { _id: 0, assessmentId: 1, score: 1, timestamp: 1 };
    const result = await Assessment.find({ userId: userId }, projection);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("cannot get assessments data");
  }
};

const getJournals = async (req, res) => {
  const userId = req.user.id;
  try {
    const projection = { _id: 0, "analysis.score": 1, timestamp: 1 };
    let result = await Journal.find({ userId: userId }, projection);
    result = result.map(({ analysis, timestamp }) => {
      return {
        score: analysis.score,
        timestamp: timestamp,
      };
    });
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("cannot get journals data");
  }
};

const getChatbotChats = async (req, res) => {
  const userId = req.user.id;
  try {
    const projection = { _id: 0, "analysis.score": 1, timestamp: 1 };
    let result = await RasaChat.find({ userId: userId }, projection);
    result = result.map(({ analysis, timestamp }) => {
      return {
        score: analysis.score,
        timestamp: timestamp,
      };
    });
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("cannot get chatbot chats data");
  }
};

const storeSingleMsg = async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await ForumChat.create({
      userId: userId,
      messageData: req.body,
    });
    res.status(201).json({ status: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "failed" });
  }
};

const getForumChat = async (req, res) => {
  const userId = req.user.id;
  try {
    // chronological order
    let results = await ForumChat.find(
      { userId: userId },
      { _id: 0, messageData: 1 },
    ).sort({ createdAt: 1 });
    results = results.map((result) => result.messageData);
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("cannot get forum chat history");
  }
};

const getHomeHistory = async (req, res) => {
  const userId = req.user.id;
  try {
    let assessments = await Assessment.find(
      { userId: userId },
      { _id: 0, assessmentId: 1 },
    );
    assessmentIds = assessments.map((assessment) => assessment.assessmentId);
    res.status(200).json({
      status: "success",
      data: {
        assessmentIds,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("cannot get home history");
  }
};

module.exports = {
  verifyToken,
  addUserDetails,
  messageRasa,
  uploadChat,
  uploadMood,
  uploadJournal,
  uploadAssessment,
  getMoods,
  getAssessments,
  getJournals,
  getChatbotChats,
  storeSingleMsg,
  getForumChat,
  getHomeHistory,
};

function analyzeSentiment(text) {
  const sentiment = new Sentiment();
  const analysis = sentiment.analyze(text);
  return analysis;
}

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const Sentiment = require("sentiment");
const mongoose = require("mongoose");
const { afinn165 } = require("afinn165");
require("dotenv").config();

const app = express();
const sentiment = new Sentiment();

let conversation = [];

app.use(express.json());

app.use(express.static("./public"));

app.use(cors({
    origin: "*"
}));

// DB connection string
const uri = process.env.MONGO_URI;

// schema
const chatSchema = new mongoose.Schema({
    msg: String,
    emotion: Object
});

// model
const Chat = mongoose.model("chat", chatSchema);

// Intialize
const start = async () => {

        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("DB is connected");
            app.listen(5000, console.log("sever is running at port 5000"));
        })
        .catch((error) => console.log(error));
}

start();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/bot", async (req, res) => {

    // user message
    const {msg} = req.body;
    axios.post('http://127.0.0.1:5005/webhooks/rest/webhook', {
    "sender": "user-name",
    "message": msg
    })
    .then( (response) => {

        const rasaResponse = response.data[0].text;

        const emotion = analysisChat(msg);

        console.log(emotion);
        conversation.push({msg, emotion});

        // to display in chats (widget in client-side)
        res.end(rasaResponse);
    })
    .catch(function (error) {
        console.log(error);
    });
});


app.post("/bot/end", (req, res) => {
    
    console.log(conversation);
    console.log("Chat is terminated");
    
    // to upload into DB
    uploadConversation(); 
});

function analysisChat(userData) {
    return sentiment.analyze(userData);
}

async function uploadConversation() {
    try {
        await Chat.insertMany(conversation);
        console.log("conversation uploaded");
        // empty the entire conversation
        conversation = [];
    } catch(error) {
        console.log(error);
    }
}
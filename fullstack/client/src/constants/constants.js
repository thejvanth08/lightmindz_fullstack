import homeIcon from "../assets/images/home-icon.png";
import heartIcon from "../assets/images/heart-icon.png";
import chatbotIcon from "../assets/images/bot-icon.png";
import communityIcon from "../assets/images/community-icon.png";
import insightsIcon from "../assets/images/insights-icon.png";
import yogaImg from "../assets/images/yoga.png";
import meditationImg from "../assets/images/meditation.png";
import musicImg from "../assets/images/music.png";
import gamesImg from "../assets/images/games.png";


export const mentalProblems = [
  "Anxiety",
  "Depression",
  "Stress",
  "Anger",
  "Mood Swings",
  "Sleep Disorders",
  "Substance Abuse",
  "Grief",
  "Low Self-Esteem",
  "Relationship Issues",
];

export const moods = [
  {
    name: "happy 1",
    emoji: "😄",
    value: 5,
  },
  {
    name: "happy 2",
    emoji: "😄",
    value: 5,
  },
  {
    name: "happy 3",
    emoji: "😄",
    value: 5,
  },
  {
    name: "happy 4",
    emoji: "😄",
    value: 5,
  },
  {
    name: "happy 5",
    emoji: "😄",
    value: 5,
  },
];

// assessment test
export const test1 = [
  {
    question:
      "How often have you felt down, depressed, or hopeless in the past two weeks?",
    options: [
      { text: "Rarely", score: 8 },
      { text: "Sometimes", score: 6 },
      { text: "Never", score: 10 },
      { text: "Always", score: 2 },
      { text: "Often", score: 4 },
    ],
  },
  {
    question: "How frequently do you experience overwhelming anxiety or worry?",
    options: [
      { text: "Rarely", score: 8 },
      { text: "Never", score: 10 },
      { text: "Often", score: 4 },
      { text: "Always", score: 2 },
      { text: "Sometimes", score: 6 },
    ],
  },
  {
    question:
      "How often do you struggle with sleeping difficulties, such as insomnia or disturbed sleep?",
    options: [
      { text: "Rarely", score: 8 },
      { text: "Sometimes", score: 6 },
      { text: "Always", score: 2 },
      { text: "Often", score: 4 },
      { text: "Never", score: 10 },
    ],
  },
  {
    question:
      "How frequently do you find it hard to concentrate or make decisions?",
    options: [
      { text: "Sometimes", score: 6 },
      { text: "Rarely", score: 8 },
      { text: "Never", score: 10 },
      { text: "Always", score: 2 },
      { text: "Often", score: 4 },
    ],
  },
  {
    question:
      "How often do you feel overwhelmed or unable to cope with daily tasks and responsibilities?",
    options: [
      { text: "Rarely", score: 8 },
      { text: "Sometimes", score: 6 },
      { text: "Never", score: 10 },
      { text: "Always", score: 2 },
      { text: "Often", score: 4 },
    ],
  },
  {
    question:
      "How frequently do you experience sudden changes in mood or emotional instability?",
    options: [
      { text: "Sometimes", score: 6 },
      { text: "Rarely", score: 8 },
      { text: "Never", score: 10 },
      { text: "Always", score: 2 },
      { text: "Often", score: 4 },
    ],
  },
  {
    question:
      "How often do you engage in behaviors that negatively impact your physical health, such as overeating or substance abuse?",
    options: [
      { text: "Rarely", score: 8 },
      { text: "Sometimes", score: 6 },
      { text: "Never", score: 10 },
      { text: "Always", score: 2 },
      { text: "Often", score: 4 },
    ],
  },
  {
    question:
      "How often do you feel disconnected from others or experience loneliness?",
    options: [
      { text: "Rarely", score: 8 },
      { text: "Sometimes", score: 6 },
      { text: "Never", score: 10 },
      { text: "Always", score: 2 },
      { text: "Often", score: 4 },
    ],
  },
  {
    question:
      "How frequently do you experience physical symptoms without a clear medical cause, such as headaches or stomachaches?",
    options: [
      { text: "Rarely", score: 8 },
      { text: "Sometimes", score: 6 },
      { text: "Never", score: 10 },
      { text: "Always", score: 2 },
      { text: "Often", score: 4 },
    ],
  },
  {
    question: "How often do you have thoughts of self-harm or suicide?",
    options: [
      { text: "Sometimes", score: 6 },
      { text: "Rarely", score: 8 },
      { text: "Never", score: 10 },
      { text: "Always", score: 2 },
      { text: "Often", score: 4 },
    ],
  },
];

export const navItems = [
  {
    name: "Home",
    icon: homeIcon,
    link: "/home"
  },
  {
    name: "Self-care",
    icon: heartIcon,
    link: "/self-care"
  },
  {
    name: "Chatbot",
    icon: chatbotIcon,
    link: "/chatbot"
  },
  {
    name: "Forum",
    icon: communityIcon,
    link: "/forums"
  },
  {
    name: "Insights",
    icon: insightsIcon,
    link: "/insights"
  },
];

export const toolsItems = [
  {
    name: "Meditation",
    link: "/meditation",
    image: meditationImg
  },
  {
    name: "Yoga Trainer",
    link: "/yoga-trainer",
    image: yogaImg
  },
  {
    name: "Chill Music",
    link: "/chill-music",
    image: musicImg
  },
  {
    name: "Games",
    link: "/games",
    image: gamesImg
  },
]
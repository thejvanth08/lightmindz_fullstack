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
    name: "happy",
    emoji: "😄",
    value: 5,
  },
  {
    name: "good",
    emoji: "😊",
    value: 4,
  },
  {
    name: "okay",
    emoji: "😑",
    value: 3,
  },
  {
    name: "bore",
    emoji: "😕",
    value: 2,
  },
  {
    name: "bad",
    emoji: "😖",
    value: 1,
  },
];

// assessment test
export const assessments = [
  {
    assessmentNo: 1,
    noOfQuestions: 10,
    questions: [
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
        question:
          "How frequently do you experience overwhelming anxiety or worry?",
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
    ],
  },
  {
    assessmentNo: 2,
    noOfQuestions: 10,
    questions: [
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
        question:
          "How frequently do you experience overwhelming anxiety or worry?",
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
    ],
  },
  {
    assessmentNo: 3,
    noOfQuestions: 10,
    questions: [
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
        question:
          "How frequently do you experience overwhelming anxiety or worry?",
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
];

export const videos = [
  {
    title:
      "Understanding Anxiety - A Psychiatrist Explains Symptoms, Medication Options and Therapy",
    link: "https://www.youtube.com/embed/A9wwZmBGKiU?si=b46KhRFyeT-3o1D8",
  },
  {
    title: "Managing depression without medication",
    link: "https://www.youtube.com/embed/0uf4hVy0OCs?si=qEgqrDeX0TDSTACm",
  },
  {
    title: "How lack of sleep affects health and tips for a good night's rest",
    link: "https://www.youtube.com/embed/KpyoDML2eUI?si=zOS04mHfrjaAehL0",
  },
  {
    title: "Overuse of social media can impact mental health",
    link: "https://www.youtube.com/embed/KpyoDML2eUI?si=zOS04mHfrjaAehL0",
  },
  {
    title: "Stop doubting yourself and go after what you really want",
    link: "https://www.youtube.com/embed/DmeOX5Zu36M?si=CGosYaqMhtTcFJDK",
  },
  {
    title: "Breaking the Stigma and Shame of Mental Illness",
    link: "https://www.youtube.com/embed/OsRF8xGgbPA?si=Mqha3iyxW_IUfzTg",
  },
  {
    title: "Mental health tips from therapists",
    link: "https://www.youtube.com/embed/gwmv_KGdceA?si=BjeSic9ntDKRwxWW",
  },
];

export const articles = [
  {
    title: "Understanding Anxiety Disorders",
    link: "https://www.medicalnewstoday.com/articles/pathological-anxiety-definition-causes-and-symptoms",
  },
  {
    title: "Recognizing and Managing Depression",
    link: "https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/depression-treatment-and-management",
  },
  {
    title: "The Importance of Sleep in Mental Health",
    link: "https://www.sleepfoundation.org/mental-health",
  },
  {
    title: "Mindfulness Techniques for Stress Reduction",
    link: "https://www.mindful.org/how-to-manage-stress-with-mindfulness-and-meditation/",
  },
  {
    title: "The Connection Between Physical Health and Mental Health",
    link: "https://www.verywellmind.com/the-mental-and-physical-health-connection-7255857",
  },
  {
    title: "The Impact of Social Media on Mental Health",
    link: "https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm#:~:text=Since%20it%27s%20a%20relatively%20new,harm%2C%20and%20even%20suicidal%20thoughts.",
  },
  {
    title: "Overcoming Self-Doubt",
    link: "https://www.tonyrobbins.com/mental-health/how-to-overcome-self-doubt/",
  },
];

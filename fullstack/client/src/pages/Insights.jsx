import { Logo, Profile, MoodsChart, AssessmentsChart, JournalsChart, ChatsChart } from "../components";
import { useState, useEffect } from "react";
import axios from "axios";

const Insights = () => {
  const [moodsData, setMoodsData] = useState(null);
  const [assessmentsData, setAssessmentsData] = useState(null);
  const [journalsData, setJournalsData] = useState(null);
  const [chatsData, setChatsData] = useState(null);

  const getMoods = async () => {
    try {
      const { data } = await axios.get("/users/mood-tracker");
      let moodsData = data.data;
      moodsData = moodsData.map((moodData) => {
        const moodMap = {
          bad: 0,
          bore: 1,
          okay: 2,
          good: 3,
          happy: 4,
        };
        
        return {
          timestamp: getProperTimeStamp(moodData.timestamp),
          mood: moodMap[moodData.mood],
        };
      })

      return moodsData;
    } catch(err) {
      console.log(err);
    }
  }

  const getAssessments = async () => {
    try {
      const { data } = await axios.get("/users/assessments");
      let assessmentsData = data.data;
      assessmentsData = assessmentsData.map((assessmentsDatum) => {
        return {
          id: assessmentsDatum.assessmentId,
          score: assessmentsDatum.score
        }
      })
      return assessmentsData
    } catch (err) {
      console.log(err);
    }
  }

  const getJournals = async () => {
    try {
      const { data } = await axios.get("/users/journals");
      let journalsData = data.data;
      journalsData = journalsData.map((journalsDatum) => {
        return {
          timestamp: getProperTimeStamp(journalsDatum.timestamp),
          score: journalsDatum.score,
        };
      });
      return journalsData
    } catch (err) {
      console.log(err);
    }
  }

  const getChats = async () => {
     try {
      const { data } = await axios.get("/users/chatbot/chats");
      let chatsData = data.data;
      chatsData = chatsData.map((chatsDatum) => {
        return {
          timestamp: getProperTimeStamp(chatsDatum.timestamp),
          score: chatsDatum.score,
        };
      });
      return chatsData;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const getData = async () => {
      const moodsData = await getMoods();
      setMoodsData(moodsData);
      const assessmentsData = await getAssessments();
      setAssessmentsData(assessmentsData);
      const journalsData = await getJournals();
      setJournalsData(journalsData);
      const chatsData = await getChats();
      setChatsData(chatsData);
    }
    getData();
  }, []);

  return (
    <div className="px-2.5 py-2 pb-20 lg:pb-10">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <section className="mt-4 max-w-[1100px] mx-auto">
        <h1 className="text-xl font-bold text-center lg:text-2xl">
          Your Mental Health Insights
        </h1>
        <div className="w-full mt-6">
          <h2 className="text-xl font-semibold text-center">Mood Tracker - Moods</h2>
          {
            ( (moodsData?.length > 0) ? 
               <MoodsChart moodsData={moodsData} /> :
               <div className="bg-violet-100 text-gray-500 text-lg font-semibold text-center max-w-80 p-4 mx-auto mt-3 rounded-lg">
                  No Moods Data Available
                </div> )
          } 
        </div>
        <div className="w-full mt-6">
          <h2 className="text-xl font-semibold text-center">Assessments - Score</h2>
          {
            ( (assessmentsData?.length > 0) ? 
               <AssessmentsChart assessmentsData={assessmentsData} /> :
               <div className="bg-violet-100 text-gray-500 text-lg font-semibold text-center max-w-80 p-4 mx-auto mt-3 rounded-lg">
                  No Assessments Data Available
                </div> )
          } 
        </div>
        <div className="w-full mt-6">
          <h2 className="text-xl font-semibold text-center">Daily Journals - Analysis</h2>
          {
            ( (journalsData?.length > 0) ? 
               <JournalsChart journalsData={journalsData} /> :
               <div className="bg-violet-100 text-gray-500 text-lg font-semibold text-center max-w-80 p-4 mx-auto mt-3 rounded-lg">
                  No Journals Data Available
                </div> )
          } 
        </div>
        <div className="w-full mt-6">
          <h2 className="text-xl font-semibold text-center">Chatbot Chats - Analysis</h2>
          {
            ( (chatsData?.length > 0) ? 
               <ChatsChart chatsData={chatsData} /> :
               <div className="bg-violet-100 text-gray-500 text-lg font-semibold text-center max-w-80 p-4 mx-auto mt-3 rounded-lg">
                  No Chats Data Available
                </div> )
          } 
        </div>

      </section>
    </div>
  );
}
export default Insights;

function getProperTimeStamp(dateString) {
  // Parse the ISO 8601 date string
  const date = new Date(dateString);

  // Format the date
  const formattedDate = `${padNumber(date.getDate())}/${padNumber(
    date.getMonth() + 1
  )}/${date.getFullYear().toString().slice(-2)}`;

  // Format the time
  const formattedTime = formatAMPM(date);

  // Function to pad numbers with leading zeros (for date formatting)
  function padNumber(num) {
    return num.toString().padStart(2, "0");
  }

  // Function to format time as hh:mm AM/PM
  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = `${padNumber(hours)}:${padNumber(minutes)} ${ampm}`;
    return strTime;
  }

  // Combine formatted date and time
  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  return formattedDateTime;
}

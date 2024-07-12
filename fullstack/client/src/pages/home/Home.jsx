import { Logo, Profile, Mood, Videos, Articles, TestCard } from "../../components";
import { moods, assessments } from "../../constants/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import diaryIcon from "../../assets/images/diary-icon.png";
import { useAppData } from "../../UserContext";

const Home = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [exploreCategory, setExploreCategory] = useState("videos");
  const navigate = useNavigate();
  const { user } = useAppData();

  return (
    <div className="w-full pb-20">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold text-center lg:text-3xl">
          Welcome back, { user }!
        </h1>
        <section className="mt-3 lg:mt-8">
          <h2 className="text-lg font-semibold text-center lg:text-xl">
            How was your mood today?
          </h2>
          <div className="flex max-w-[600px] justify-evenly items-center flex-wrap mt-2 mx-auto lg:mt-4">
            {moods.map((mood, index) => (
              <Mood
                key={index}
                name={mood.name}
                emoji={mood.emoji}
                selectedMood={selectedMood}
                setSelectedMood={setSelectedMood}
              ></Mood>
            ))}
          </div>
        </section>
        <section className="mt-3 lg:mt-8">
          <h2 className="text-lg font-semibold text-center lg:text-xl">
            Take your Assessment Test
          </h2>
          <div className="flex max-w-[700px] justify-evenly overflow-x-auto mt-2 mx-auto lg:mt-4 scroll-style">
            {
              assessments.map((assessment) => (
                <TestCard key={assessment.assessmentNo} {...assessment}></TestCard>
              ))
            }
          </div>
        </section>

        <section className="mt-3 lg:mt-8">
          <h2 className="text-lg font-semibold text-center lg:text-xl">
            Finish up today's story
          </h2>
          <div className="w-72 bg-violet-400 flex flex-col items-center p-4 mx-auto mt-2 rounded-lg lg:w-96 lg:p-6 lg:space-y-5 lg:mt-4">
            <img src={diaryIcon} alt="" className=""/>
            <button
              onClick={() => {
                navigate("/home/daily-journal");
              }}
              className="bg-white text-primary font-semibold px-4 py-1 rounded-lg mt-2"
            >
              Write
            </button>
          </div>
        </section>

        <section className="mt-3 lg:mt-8">
          <h2 className="text-lg font-semibold text-center lg:text-xl">
            Discover more about mental well-being
          </h2>
          <div className="mt-2 rounded lg:mt-4">
            <div className="flex justify-center items-center gap-x-8">
              <button
                onClick={() => {
                  setExploreCategory("videos");
                }}
                className="bg-violet-500 text-white px-3 py-1.5 rounded-lg"
              >
                Videos
              </button>
              <button
                onClick={() => {
                  setExploreCategory("articles");
                }}
                className="bg-violet-500 text-white px-3 py-1.5 rounded-lg"
              >
                Articles
              </button>
            </div>
            <div>
              {exploreCategory === "videos" ? (
                <Videos></Videos>
              ) : (
                <Articles></Articles>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;
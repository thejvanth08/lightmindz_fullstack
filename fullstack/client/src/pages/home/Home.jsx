import { Logo, Profile, Mood, Videos, Articles } from "../../components";
import { moods } from "../../constants/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import diaryIcon from "../../assets/images/diary-icon.png";

const Home = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [exploreCategory, setExploreCategory] = useState("videos");
  const navigate = useNavigate();

  return (
    <div className="px-2.5 py-2 pb-20">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold text-center">Welcome back, thomas!</h1>
        <section className="mt-3">
          <h2 className="text-lg font-semibold text-center">
            How was your mood today?
          </h2>
          <div className="flex justify-evenly items-center flex-wrap mt-2">
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
        <section className="mt-3">
          <h2 className="text-lg font-semibold text-center">
            Take your Assessment Test
          </h2>
          <div className="flex overflow-x-auto mt-2">
            <div className="flex-shrink-0 bg-violet-100 w-52 p-4 mr-4 rounded-lg">
              <p className="font-semibold">Test 1</p>
              <p>Questions: 10</p>
              <button className="bg-violet-500 text-white px-3 py-1 rounded-lg mt-2">
                Take Test
              </button>
            </div>
            <div className="flex-shrink-0 bg-violet-100 w-52 p-4 mr-4 rounded-lg">
              <p className="font-semibold">Test 1</p>
              <p>Questions: 10</p>
              <button className="bg-violet-500 text-white px-3 py-1 rounded-lg mt-2">
                Take Test
              </button>
            </div>
            <div className="flex-shrink-0 bg-violet-100 w-52 p-4 mr-4 rounded-lg">
              <p className="font-semibold">Test 1</p>
              <p>Questions: 10</p>
              <button className="bg-violet-500 text-white px-3 py-1 rounded-lg mt-2">
                Take Test
              </button>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <h2 className="text-lg font-semibold text-center">
            Finish up today's story
          </h2>
          <div className="w-72 bg-violet-400 flex flex-col items-center p-4 mx-auto mt-2 rounded-lg">
            <img src={diaryIcon} alt="" />
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

        <section className="mt-3">
          <h2 className="text-lg font-semibold text-center">
            Discover more about mental well-being
          </h2>
          <div className="mt-2 rounded">
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
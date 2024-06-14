import { Logo, Profile } from "../../components";
import { meditationTracks } from "../../constants/constants";
import breathingAnimation from "../../assets/animation/breathing.webp";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState, useEffect } from "react";

const Meditation = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleChangeTrack = (src) => {
    console.log("changing track");
    setCurrentTrack(src);
  };

  useEffect(() => {
    // Play the track when currentTrack changes
    if (currentTrack) {
      const audioEle = document.getElementById("audio-player");
      if (audioEle) {
        audioEle.play();
      }
    }
  }, [currentTrack]);

  return (
    <div className="px-2.5 py-2 pb-10">
      <div className="flex justify-between items-center">
        <Logo />
        <Profile />
      </div>
      <section className="mt-4 max-w-[1100px] mx-auto">
        <h1 className="text-xl font-bold text-center lg:text-2xl">
          Relax your mind and soul
        </h1>
        <div className="w-full mt-8 lg:mt-10">
          <div className="max-w-[500px] flex justify-evenly mx-auto">
            {meditationTracks.map((track, index) => (
              <div
                onClick={() => handleChangeTrack(track.src)}
                key={index}
                className={`text-lg font-semibold p-3 rounded-lg cursor-pointer ${
                  currentTrack == track.src
                    ? "bg-violet-400 text-white"
                    : "bg-violet-100 text-violet-500"
                } lg:px-6 lg:py-4`}
              >
                {track.time}
              </div>
            ))}
          </div>

          {currentTrack ? (
            <>
              <div className="mt-12 lg:mt-14">
                <img
                  src={breathingAnimation}
                  alt=""
                  className="bg-violet-200 w-52 h-52 p-3 mx-auto rounded-full lg:w-72 lg:h-72 lg:p-6"
                />
              </div>
              <AudioPlayer
                id="audio-player"
                src={currentTrack}
                autoPlay
                controls
                className="custom-audio-player w-[330px] mt-12 mx-auto md:w-[400px] lg:w-[500px] lg:mt-12"
                onPlay={() => console.log("onPlay")}
                showJumpControls={false}
                customAdditionalControls={[]}
              />
            </>
          ) : (
            <div className="mt-40">
              <p className="text-gray-500 text-lg font-semibold text-center">
                Choose the Timer
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Meditation;

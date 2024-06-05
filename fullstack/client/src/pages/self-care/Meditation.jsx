import { Logo, Profile } from "../../components";
import { meditationTracks } from "../../constants/constants";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState, useRef, useEffect } from "react";

const Meditation = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null);

  const handleChangeTrack = (src) => {
    setCurrentTrack(src);
  };
  
 useEffect(() => {
   if (currentTrack && audioRef.current) {
     console.log("restarting the audio");
     audioRef.current.pause(); // Pause the current audio if playing
     audioRef.current.load(); // Load the new track
     audioRef.current.play(); // Play the new track
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
        <div className="w-full mt-3 ">
          <div className="max-w-[500px] flex justify-evenly mx-auto">
            {meditationTracks.map((track, index) => (
              <div
                onClick={() => handleChangeTrack(track.src)}
                key={index}
                className="bg-violet-300 text-lg p-3"
              >
                {track.time}
              </div>
            ))}
          </div>

          <audio ref={audioRef} controls autoPlay={true}>
            <source src={currentTrack} type="audio/mp3" />
          </audio>
        </div>
      </section>
    </div>
  );
};

export default Meditation;

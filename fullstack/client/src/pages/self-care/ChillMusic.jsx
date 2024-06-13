import { Logo, Profile, MusicPlayer } from "../../components";
import { musicTracks } from "../../constants/constants";
import { useState, useEffect } from "react";
import playIcon from "../../assets/images/play-btn-icon.png";

const ChillMusic = () => {
  const categories = [...new Set(musicTracks.map((track) => track.category))];

  // it must show the tracks of chosen category
  const [tracks, setTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null);

  const handleChangeCategory = (category) => {
    const currentTracks = musicTracks.filter((track) => track.category == category);
    setTracks(currentTracks);
    console.log(currentTracks);
  }

  const handlePlay = (track) => {
    setPlayingTrack(track);
  }

  return (
    <div className="px-2.5 py-2 pb-10">
      <div className="flex justify-between items-center">
        <Logo />
        <Profile />
      </div>
      <section className="mt-4 max-w-[1100px] mx-auto">
        <h1 className="text-xl font-bold text-center lg:text-2xl">
          Enjoy the music
        </h1>
        <div className="w-full mt-8 lg:mt-10">
          <div className="max-w-[500px] flex justify-evenly mx-auto">
            {categories.map((category) => (
              <div
                onClick={() => handleChangeCategory(category)}
                key={category}
                className="bg-violet-400 text-white text-lg font-semibold p-3 capitalize rounded-lg cursor-pointer lg:px-6 lg:py-4"
              >
                {category}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-start gap-y-2 lg:mt-14">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="bg-violet-100 w-[350px] px-3 py-2 flex justify-between items-center rounded-lg"
              >
                <p>{track.title}</p>
                <div
                  onClick={() => { handlePlay(track) }}
                  className="bg-violet-500 p-1.5 rounded-full cursor-pointer"
                >
                  <img src={playIcon} alt="" className="w-8 h-8" />
                </div>
              </div>
            ))}
          </div>

          { playingTrack && <MusicPlayer {...playingTrack} setPlayingTrack={setPlayingTrack} /> }
        </div>
      </section>
    </div>
  );
};
export default ChillMusic;

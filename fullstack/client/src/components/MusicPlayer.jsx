import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useEffect } from "react";
import musicBg from "../assets/images/music-bg.jpg";
import backIcon from "../assets/images/back-icon-2.png";
import { useNavigate } from "react-router-dom";

const MusicPlayer = ({ src, title, setPlayingTrack }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (src) {
      const audioEle = document.getElementById("music-audio-player");
      if (audioEle) {
        audioEle.play();
      }
    }
  }, [src]);


  const style = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${musicBg})`,
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-screen bg-cover bg-no-repeat"
      style={style}
    >
      <div
        className="inline-block ml-4 mt-4 cursor-pointer lg:ml-8 lg:mt-8"
        onClick={() => setPlayingTrack(null) }
      >
        <img src={backIcon} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
      </div>

      <div className="h-full flex flex-col justify-around">
        <div className="">
          <h2 className="text-violet-100 text-3xl font-semibold text-center">
            {title}
          </h2>
        </div>

        <AudioPlayer
          id="music-audio-player"
          src={src}
          autoPlay
          controls
          className="custom-audio-player-two text-white w-[350px] mx-auto md:w-[400px] lg:w-[500px]"
          onPlay={() => console.log("onPlay")}
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
        />
      </div>
    </div>
  );
};
export default MusicPlayer;

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useEffect } from "react";

const MusicPlayer = ({ playingTrack }) => {

  useEffect(() => {
    if (playingTrack) {
      const audioEle = document.getElementById("music-audio-player");
      if (audioEle) {
        audioEle.play();
      }
    }
  }, [playingTrack]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-500 h-screen">
    <div>

    </div>
      <AudioPlayer
        id="music-audio-player"
        src={playingTrack}
        autoPlay
        controls
        className="custom-audio-player w-[330px] mt-12 mx-auto md:w-[400px] lg:w-[500px] lg:mt-12"
        onPlay={() => console.log("onPlay")}
        showJumpControls={false}
        customAdditionalControls={[]}
      />
    </div>
  );
};
export default MusicPlayer;

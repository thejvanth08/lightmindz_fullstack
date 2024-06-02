import { videos } from "../constants/constants";

const Videos = () => {
  return (
    <div className="mt-4">
      {videos.map(({ title, link }) => (
        <article key={title} className="bg-violet-100 sm2:w-[460px] rounded-lg p-3 mb-4 mx-auto">
          <iframe
            className="w-full max-w-[460px] h-[280px] rounded-lg"
            src={link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <h3 className="pl-1 pt-1">{title}</h3>
        </article>
      ))}
    </div>
  );
}
export default Videos;
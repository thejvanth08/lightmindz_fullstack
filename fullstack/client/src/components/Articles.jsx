import { articles } from "../constants/constants";
import articleIcon from "../assets/images/article-icon.png";

const Articles = () => {
  return (
    <div className="mt-4">
      {articles.map(({ title, link }) => (
        <article className="bg-violet-100 p-3 mb-3 rounded-lg cursor-pointer">
          <a href={link} target="_blank" className="flex justify-left items-center gap-x-3">
            <div className="inline-block bg-violet-500 p-2 rounded-full flex-shrink-0">
              <img src={articleIcon} className="w-8 h-8" />
            </div>
            <p>{title}</p>
          </a>
        </article>
      ))}
    </div>
  );
}
export default Articles;
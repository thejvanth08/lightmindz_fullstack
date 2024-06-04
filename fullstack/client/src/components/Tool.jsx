import { useNavigate } from "react-router-dom";

const Tool = ({ name, link, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/self-care${link}`);
  }

  return (
    <div
      onClick={handleClick} 
      className="max-w-[600px] bg-violet-100 px-2 py-1 mb-2 mx-auto rounded-lg flex justify-evenly items-center lg:shrink-0 lg:basis-[500px]">
      <p className="text-xl font-semibold">
        { name }
      </p>
      <img 
        src={image}
        className="w-36 h-36 object-cover lg:w-44 lg:h-44"
      ></img>
    </div>
  )
}
export default Tool;
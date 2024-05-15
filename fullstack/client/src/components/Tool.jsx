import { useNavigate } from "react-router-dom";

const Tool = ({ name, link, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/self-care${link}`);
  }

  return (
    <div
      onClick={handleClick} 
      className="bg-violet-100 px-2 py-1 mb-2 rounded-lg flex justify-evenly items-center">
      <p className="text-xl font-semibold">
        { name }
      </p>
      <img 
        src={image}
        className="w-36 h-36 object-cover"
      ></img>
    </div>
  )
}
export default Tool;
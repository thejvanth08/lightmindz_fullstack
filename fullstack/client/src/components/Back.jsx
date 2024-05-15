import { useNavigate } from "react-router-dom";
import backIcon from "../assets/images/back-icon.png";

const Back = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <img src={backIcon} className="w-7 h-7" />
    </div>
  ) 
};
export default Back;

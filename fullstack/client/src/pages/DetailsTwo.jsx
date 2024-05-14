import { mentalProblems } from "../constants/constants";
import { useState } from "react";
import { useAppData } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { Problem } from "../components";
import axios from "axios";

const DetailsTwo = () => {
  const {details, setDetails} = useAppData();
  const navigate = useNavigate();
  const [problems, setProblems] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // this is synchronous
    // setDetails((prevDetails) => ({...prevDetails, problems: problems}));
    // console.log(details); // this will always 
    const updatedDetails = { ...details, problems: problems };
    setDetails(updatedDetails);
    try {
      const { data } = await axios.post("add-details", updatedDetails);
      console.log(data);
      navigate("/home");
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="px-4">
      <div className="max-w-[450px] h-auto bg-violet-200 px-5 py-8 mx-auto mt-32 rounded-lg">
        <h1 className="text-2xl font-bold lg:text-3xl text-center">
          Experiencing any of these issues?
        </h1>
        <form onSubmit={handleSubmit} className="max-w-[430px] mx-auto mt-6">
          {mentalProblems.map((problem) => (
            <Problem key={problem} name={problem} problems={problems} setProblems={setProblems}></Problem>
          ))}
          <button
            type="submit"
            className="block w-40 bg-primary text-white font-bold mt-4 mx-auto rounded-lg py-2 cursor-pointer"
          >
            Finish
          </button>
        </form>
      </div>
    </div>
  );
}
export default DetailsTwo;
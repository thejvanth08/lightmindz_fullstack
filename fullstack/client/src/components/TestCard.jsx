import { useNavigate } from "react-router-dom";

const TestCard = ({ assessmentNo, noOfQuestions, questions }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`test/${assessmentNo}`, {
      state: questions
    });
  }

  return (
    <div className="flex-shrink-0 bg-violet-100 w-52 p-4 mr-4 rounded-lg lg:w-60 lg:p-6">
      <p className="font-semibold lg:text-lg">Test {assessmentNo}</p>
      <p>Questions: {noOfQuestions}</p>
      <button onClick={handleNavigate} className="bg-violet-500 text-white px-3 py-1 rounded-lg mt-2">
        Take Test
      </button>
    </div>
  );
}
export default TestCard;
import { useNavigate } from "react-router-dom";

const TestCard = ({ assessmentNo, noOfQuestions, questions }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`test/${assessmentNo}`, {
      state: questions
    });
  }

  return (
    <div className="flex-shrink-0 bg-violet-100 w-52 p-4 mr-4 rounded-lg">
      <p className="font-semibold">Test {assessmentNo}</p>
      <p>Questions: {noOfQuestions}</p>
      <button onClick={handleNavigate} className="bg-violet-500 text-white px-3 py-1 rounded-lg mt-2">
        Take Test
      </button>
    </div>
  );
}
export default TestCard;
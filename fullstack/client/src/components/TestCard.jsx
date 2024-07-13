import { useNavigate } from "react-router-dom";

const TestCard = ({ assessmentNo, noOfQuestions, questions, completedAssessments }) => {
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
      {completedAssessments.includes(assessmentNo) ? (
        <button
          className="bg-gray-200 text-violet-900 px-3 py-1 rounded-lg mt-2 border border-gray-400 cursor-not-allowed"
        >
          Completed
        </button>
      ) : (
        <button
          onClick={handleNavigate}
          className="bg-violet-500 text-white px-3 py-1 rounded-lg mt-2"
        >
          Take Test
        </button>
      )}
    </div>
  );
}
export default TestCard;
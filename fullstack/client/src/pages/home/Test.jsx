import { useParams, useLocation } from "react-router-dom";
import { Logo, Profile } from "../../components";
import { useState, useEffect } from "react";

const Test = () => {
  const { id } = useParams();
  const { state: mcqs } = useLocation();
  const [quesIndex, setQuesIndex] = useState(0);
  // score for single question
  const [answer, setAnswer] = useState({});
  const [totalScore, setTotalScore] = useState(0);

  const { question, options } = mcqs[quesIndex];

  // latest total score
  useEffect(() => {
    console.log("total:", totalScore);
  }, [totalScore])

  // to unselect the option after clicking "next"
  useEffect(() => {
    return () => {
      setAnswer({});
    };
  }, [quesIndex]);

  const handleSelect = (answer) => {
    setAnswer(() => answer);
  };

  const handleNext = () => {
    setQuesIndex(quesIndex + 1);
    setTotalScore((prevTotalScore) => prevTotalScore + answer.score);
  }
  
  const handleSubmit = () => {
    setTotalScore((prevTotalScore) => prevTotalScore + answer.score);
    // submitting to server
    
  }

  return (
    <div className="w-full pb-20">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <section className="mt-3 lg:mt-8">
        <h1 className="text-xl font-bold text-center lg:text-2xl">Test {id}</h1>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-violet-700 mb-4">
            {quesIndex + 1}. {question}
          </h3>
          <div className="flex flex-col">
            {options.map((option) => (
              <input
                key={option.score}
                onClick={() => {
                  handleSelect(option);
                }}
                type="button"
                value={option.text}
                className={`bg-violet-200 px-3 py-2 mb-2 hover:bg-violet-400 ${option.text == answer?.text ? "bg-violet-400" : ""}`}
              />
            ))}
            {quesIndex < mcqs.length - 1 ? (
              <button
                type="button"
                className="bg-violet-500 text-white px-3 py-2 mb-2"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="bg-violet-500 text-white px-3 py-2 mb-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Test
import { useParams, useLocation } from "react-router-dom";
import { Logo, Profile } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const { id } = useParams();
  const { state: mcqs } = useLocation();
  const [quesIndex, setQuesIndex] = useState(0);
  // answer for each question
  const [answer, setAnswer] = useState({});
  // final score  
  const [totalScore, setTotalScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { question, options } = mcqs[quesIndex];

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
    // only move to next question after selecting answer
    if("score" in answer) {
      setQuesIndex(quesIndex + 1);
      setTotalScore((prevTotalScore) => prevTotalScore + answer.score);
    } else {
      setShowAlert(true);
      const timerId = setTimeout(() => {
        setShowAlert(false);
        clearTimeout(timerId);
      }, 800);
      // clearTimeout cannot be called immediately, after using setTimeout - it clears the timeout before it executes it
      // clearTimeout(timerId); like this

    }
  }
  
  const handleSubmit = async () => {
      setTotalScore((prevTotalScore) => prevTotalScore + answer.score);
      // as state update is asynchronous
      const latestScore = totalScore + answer.score;
      setIsSubmitted(true);
      try {
        const response = await axios.post(`/users/assessment/${id}`, {
          score: latestScore
        });
        console.log(response.data);
      } catch(err) {
        console.log(err);
      }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <section className="mt-3 lg:mt-8">
        <h1 className="text-xl font-bold text-center lg:text-2xl">Test {id}</h1>
        <div className="max-w-[700px] p-3 mx-auto mt-6 border-2 border-violet-500 rounded-lg md:p-6 lg:p-8 lg:mt-8">
          <h3 className="text-lg font-semibold text-violet-700 mb-4">
            {quesIndex + 1}. {question}
          </h3>
          {!isSubmitted ? (
            <div className="flex flex-col">
              {options.map((option) => (
                <input
                  key={option.score}
                  onClick={() => {
                    handleSelect(option);
                  }}
                  type="button"
                  value={option.text}
                  className={`bg-violet-200 px-3 py-2 mb-2 hover:bg-violet-400 hover:text-white ${
                    option.text == answer?.text ? "bg-violet-400 text-white font-semibold" : ""
                  }`}
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
          ) : (
            <div className="bg-violet-300 max-w-[500px] h-80">
              <p className="text-xl font-bold">Test Completed Successfully</p>
            </div>
          )}
        </div>
        {showAlert && (
          <div className="bg-red-500 text-white font-bold text-center max-w-72 p-3 mt-1 mx-auto rounded-lg shadow-2xl">
            select the option first
          </div>
        )}
      </section>
    </div>
  );
}
export default Test
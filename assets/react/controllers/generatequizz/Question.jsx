import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Question = ({
  question,
  currentProgress,
  questionCount,
  nextQuestion,
  endQuizz,
  onCorrect,
}) => {
  const [answeredQuestion, setAnsweredQuestion] = useState(null);

  return (
    <div className="flex flex-col gap-6 text-xl w-full">
      <div className="grid grid-cols-2 gap-4 w-full ">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => setAnsweredQuestion(index)}
            className={
              "p-4 w-full h-[125px] rounded-md transition-all " +
              (answeredQuestion != null
                ? question.finalAnswerIndex === index
                  ? "bg-green-400"
                  : answeredQuestion === index
                  ? "bg-red-400"
                  : "bg-gray-300"
                : "bg-blue-500")
            }
          >
            {answer}
          </button>
        ))}
      </div>
      {currentProgress < questionCount - 1 ? (
        <button
          className="bg-yellow-500 w-full py-2 rounded disabled:bg-opacity-20 cursor-pointer"
          onClick={() => {
            if (answeredQuestion === question.finalAnswerIndex) {
              onCorrect();
            }
            if (currentProgress !== questionCount - 1) {
              nextQuestion();
            }
          }}
          disabled={answeredQuestion === null}
        >
          SUIVANT
        </button>
      ) : (
        <button
          className="bg-yellow-500 w-full py-2 rounded disabled:bg-opacity-20 cursor-pointer"
          onClick={endQuizz}
          disabled={answeredQuestion === null}
        >
          TERMINER
        </button>
      )}
    </div>
  );
};

export default Question;

import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import QuizzEndedModal from "./quizzEndedModal";
import Difficulty from "./Difficulty";

const generateQuizz = () => {
  const [theme, setTheme] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [quizzEnded, setQuizzEnded] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [difficulty, setDifficulty] = useState(null);
  const [nbQuestion, setNbQuestion] = useState(5);

  const endQuizz = () => {
    setQuizzEnded(true);
  };

  const generateQuizz = async () => {
    axios
      .post("http://localhost:8001/quizz/generateQuizz", {
        prompt: theme,
        difficulty: difficulty,
        nbQuestion: nbQuestion,
      })
      .then((response) => {
        const json = JSON.parse(
          response.data.candidates[0].content.parts[0].text
            .replace("```json", "")
            .replace("```", "")
        );
        setQuestions(json);
      });
  };

  const restartQuizz = () => {
    setQuestions([]);
    setQuizzEnded(false);
    setCorrect(0);
    setTheme("");
    setDifficulty(null);
    setNbQuestion(5);
  };

  return (
    <div className="h-screen flex-col items-center flex ">
      {quizzEnded && (
        <QuizzEndedModal
          correct={correct}
          total={questions.length}
          restartQuizz={restartQuizz}
        />
      )}

      {questions.length === 0 && (
        <div className=" h-[60%] w-fit  items-center flex flex-col">
          <p className="text-4xl font-bold mt-24">Quizzdle!</p>
          <p className="opacity-80 mt-1">
            Choississez un thème sur lequel generer un quizz !
          </p>
          <input
            className="border-solid bg-neutral-800 text-black bg-opacity-10  rounded text-lg px-3 w-[700px] py-6 mt-5 "
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
            placeholder="Thème du quizz..."
          />
          <div className="flex w-full gap-2 mt-2 font-medium">
            <Difficulty
              difficulty={"easy"}
              displayed={"Facile"}
              currentDifficulty={difficulty}
              bgColor={"#66bb6a"}
              textColor={"#388e3c"}
              onClick={() => setDifficulty("easy")}
            />
            <Difficulty
              difficulty={"medium"}
              displayed={"Moyen"}
              currentDifficulty={difficulty}
              bgColor={"#ffa726"}
              textColor={"#f57c00"}
              onClick={() => setDifficulty("medium")}
            />
            <Difficulty
              difficulty={"hard"}
              displayed={"Difficile"}
              currentDifficulty={difficulty}
              bgColor={"#ef5350"}
              textColor={"#c62828"}
              onClick={() => setDifficulty("hard")}
            />
          </div>
          <p className="text-start w-full mt-10">Nombre de question</p>
          <input
            className="w-full text-start border-2"
            type="number"
            onChange={(e) => setNbQuestion(e.target.value)}
          />
          <button
            className="bg-[#FFC857] mt-10 w-full  py-4 font-medium "
            onClick={generateQuizz}
          >
            Generer
          </button>
        </div>
      )}
      <div className="flex flex-col gap-10 items-center justify-center w-[1300px]">
        {questions.length > 0 && !quizzEnded && (
          <div className="flex flex-col gap-4 w-[1300px]">
            <div className="flex justify-between w-full">
              <p className="font-semibold text-xl w-[90%] ">
                {questions[questionCount].question}
              </p>
              <p>
                {questionCount} / {questions.length}
              </p>
            </div>

            <ProgressBar
              percentage={(questionCount / questions.length) * 100}
            />

            <Question
              key={questionCount}
              question={questions[questionCount]}
              currentProgress={questionCount}
              questionCount={questions.length}
              nextQuestion={() => setQuestionCount(questionCount + 1)}
              endQuizz={endQuizz}
              onCorrect={() => setCorrect(correct + 1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default generateQuizz;

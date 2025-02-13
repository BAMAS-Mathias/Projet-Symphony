import axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionPage from "./QuestionPage";
import Navbar from "../navbar/Navbar";

const quizzPlay = ({ id }) => {
  const [questions, setQuestions] = useState([]);
  const [questionFinished, setQuestionFinished] = useState(0);
  const [answer, setAnswer] = useState([]);

  const fetchQuestion = async (questionRoute) => {
    const question = await axios.get("http://localhost:8000" + questionRoute);
    return question.data;
  };

  const fetchQuizz = async (id) => {
    try {
      const quizz = await axios.get(`http://localhost:8000/api/quizzs/${id}`);

      const fetchedQuestions = await Promise.all(
        quizz.data.questions.map(async (questionRoute) => {
          return await fetchQuestion(questionRoute);
        })
      );

      setQuestions(fetchedQuestions);
    } catch (error) {
      console.error("Erreur lors du chargement du quiz :", error);
    }
  };

  useEffect(() => {
    fetchQuizz(id);
  }, []);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div>
      <Navbar />
      <div className="px-10 py-10">
        {questionFinished < questions.length && (
          <QuestionPage
            question={questions[questionFinished]}
            nextPage={() => setQuestionFinished(questionFinished + 1)}
            questionFinished={questionFinished}
            totalQuestion={questions.length}
          />
        )}
      </div>
    </div>
  );
};

export default quizzPlay;

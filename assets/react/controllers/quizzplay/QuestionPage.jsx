import React from "react";
import Button from "../../../components/Button";

const QuestionPage = ({
  question,
  nextPage,
  questionFinished,
  totalQuestion,
}) => {
  return (
    <div>
      <p>
        Question {questionFinished + 1} sur {totalQuestion}
      </p>
      <p className="text-xl">{question.description}</p>
      <input></input>
      <Button value={"SUIVANT"} onClick={nextPage} />
    </div>
  );
};

export default QuestionPage;

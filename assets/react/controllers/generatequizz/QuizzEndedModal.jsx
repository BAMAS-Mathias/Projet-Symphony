import React from "react";
import Button from "../../../components/Button";

const QuizzEndedModal = ({ correct, total, restartQuizz }) => {
  return (
    <div>
      <p className="text-2xl">
        Vous avez eu un score de{" "}
        <b>
          {correct}/{total}
        </b>
      </p>
      <Button value={"Nouveau quizz"} onClick={restartQuizz} />
    </div>
  );
};

export default QuizzEndedModal;

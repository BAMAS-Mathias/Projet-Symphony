import React from "react";
import Navbar from "../navbar/Navbar";
import Button from "../../../components/Button";
import quizzIllustration from "../../../img/dashboard-illustration.svg";

const Dashboard = () => {
  return (
    <div className="text-[#1d1d1d] max-w-screen max-h-screen overflow-y-hidden ">
      <Navbar />
      <div className="w-full items-center text-center flex mt-24 flex-col">
        <p className="text-6xl font-bold w-fit  max-w-[600px]">
          Découvrez des quizz sur Quizzdle
        </p>
        <p className="w-fit max-w-[900px] text-lg opacity-80 mt-5">
          Découvrez et créez des quiz sur tous les domaines avec Quizzdle !
          Testez vos connaissances, explorez une large bibliothèque de questions
          et défiez vos amis pour apprendre en vous amusant. Rejoignez Quizzdle
          et plongez dans l'univers du quiz !
        </p>
        <Button value={"Nous rejoindre"} className={"px-32 mt-6 py-4 "} />
        <img
          className="absolute left-[70%] top-[50%]"
          src={quizzIllustration}
        />
      </div>
    </div>
  );
};

export default Dashboard;

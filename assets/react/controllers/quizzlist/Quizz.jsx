import React from "react";

const Quizz = ({ quizz }) => {
  return (
    <div className="bg-[#FFC857] px-4 py-3 h-[100px] rounded hover:scale-105 transition-all cursor-pointer relative">
      <a
        href={"/quizz/play/" + quizz.id}
        className="absolute w-full h-full left-0 top-0 z-10"
      ></a>
      <p className="font-medium">{quizz.name}</p>
      <p className="opacity-80">{quizz.description}</p>
    </div>
  );
};

export default Quizz;

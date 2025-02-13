import React from "react";

const Difficulty = ({
  difficulty,
  displayed,
  currentDifficulty,
  bgColor,
  textColor,
  onClick,
}) => {
  return (
    <p
      style={{ backgroundColor: bgColor + "66", color: textColor }}
      className={
        currentDifficulty == null || difficulty == currentDifficulty
          ? " w-full text-center py-1 bg-opacity-45 rounded cursor-pointer transition-all"
          : " w-full text-center py-1 !bg-black !bg-opacity-20 !text-black rounded cursor-pointer transition-all"
      }
      onClick={onClick}
    >
      {displayed}
    </p>
  );
};

export default Difficulty;

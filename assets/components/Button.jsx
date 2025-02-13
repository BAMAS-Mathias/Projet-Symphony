import React from "react";

const Button = ({ value, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      className={
        className +
        " bg-[#FFC857] hover:bg-[#dca944] px-8 py-2 rounded-lg font-medium transition-all"
      }
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;

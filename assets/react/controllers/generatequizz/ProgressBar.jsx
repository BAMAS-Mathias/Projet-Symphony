import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-black h-3 rounded relative bg-opacity-15">
      <div
        style={{ width: percentage + "%" }}
        className={
          "absolute h-full rounded left-0 top-0 bg-yellow-500 transition-all "
        }
      ></div>
    </div>
  );
};

export default ProgressBar;

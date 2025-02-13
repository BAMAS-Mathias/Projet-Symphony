import React from "react";

const Input = ({ onChange, label, className, type='text', name }) => {
  return (
    <label className="flex flex-col font-medium">
      {label}
      <input
        name={name}
        type={type}
        className={
          className +
          " border-2 border-[#FFC857] border-opacity-80 py-2 px-2 rounded"
        }
        onChange={onChange}
      />
    </label>
  );
};

export default Input;

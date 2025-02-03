import React from "react";

const Hello = (props) => {
  return (
    <div>
        <button onClick={() => setI(i+1)}>Ajouter</button>
        <p className="bg-red-500">{i}</p>
    </div>
  );
};

export default Hello;

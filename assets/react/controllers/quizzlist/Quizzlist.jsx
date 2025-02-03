import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";

const Quizzlist = () => {
  const [quizzList, setQuizzList] = useState([]);

  fetchQuizzList = () => {
    axios.get("http://localhost:8000/api/quizz").then((response) => {
      setQuizzList(response.data);
    });

    return (
      <div className="w-screen h-screen">
        <Navbar />
      </div>
    );
  };
};
export default Quizzlist;

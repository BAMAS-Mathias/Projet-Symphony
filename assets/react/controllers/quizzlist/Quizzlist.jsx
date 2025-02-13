import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import Quizz from "./Quizz";

const Quizzlist = () => {
  const [quizzList, setQuizzList] = useState([]);

  const fetchQuizzList = () => {
    axios.get("http://localhost:8000/api/quizzs").then((response) => {
      setQuizzList(response.data.member);
    });
  };

  useEffect(() => {
    fetchQuizzList();
  }, []);

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="grid gap-2 px-10 py-10 w-full h-full">
        {quizzList.length > 0 &&
          quizzList.map((quizz, index) => (
            <div key={index}>
              <Quizz quizz={quizz} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Quizzlist;

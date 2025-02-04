import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";

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
      {quizzList.length > 0 && quizzList.map((quizz) => <p>{quizz.name}</p>)}
    </div>
  );
};

export default Quizzlist;

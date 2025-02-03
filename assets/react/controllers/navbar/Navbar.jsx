import React from "react";
import Button from "../../../components/Button";

const Navbar = () => {
  return (
    <div className="w-full h-20 px-8 flex items-center gap-4 justify-between">
      <p className="text-3xl font-bold">Quizzdle</p>
      <div className="ml-4 flex gap-6">
        <a href="/quizz">Tous les quizz</a>
        <a href="/quizz/create">Créer un quizz</a>
        <a href="/quizz/generate">Générer un quizz</a>
      </div>
      <Button className={""} value={"Se connecter"} />
    </div>
  );
};

export default Navbar;

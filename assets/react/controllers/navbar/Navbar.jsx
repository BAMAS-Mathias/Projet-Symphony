import React, { useEffect } from "react";
import Button from "../../../components/Button";
import { useCookies } from "react-cookie";

const Navbar = ({ auth }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["PHPSESSID"]);

  useEffect(() => {
    console.log(document.cookie);
  }, []);

  return (
    <div className="w-full h-20 px-8 flex items-center gap-4 justify-between">
      <p className="text-3xl font-bold">Quizzdle</p>
      <div className="ml-4 flex gap-6">
        <a href="/quizz">Tous les quizz</a>
        <a href="/quizz/generate">Générer un quizz</a>
      </div>
      {!auth && (
        <Button
          className={""}
          value={"Se connecter"}
          onClick={() => (location.href = "/login")}
        />
      )}
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import login_illustration from "../../../img/login-illustration.svg";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import axios from "axios";

const Login = ({ token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    await axios
      .post("http://localhost:8000/login", { username, password })
      .then((response) => console.log(response));
  };
  return (
    <div>
      <Navbar />
      <div className="flex px-10 py-10 justify-center gap-64">
        <img className="size-[600px] w-[30%] pl-32" src={login_illustration} />
        <div className=" w-full mt-32">
          <p className="text-2xl font-medium w-fit">Bienvenue sur Quizzdle</p>
          <p className="opacity-80 text-lg w-[550px]">
            Créez votre compte et profitez de tous les quizzs disponibles sur le
            site.
          </p>

          <form className="flex flex-col gap-4 mt-8 w-[500px]" method="post">
            <input type="hidden" name="_csrf_token" value={token} />

            <Input
              name={"username"}
              label={"Nom d'utilisateur"}
              className={"w-full"}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              name={"password"}
              label={"Mot de passe"}
              className={"w-full mt-2"}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type={"submit"}
              value={"Se connecter"}
              className={"py-4 mt-5"}
              onClick={loginUser}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

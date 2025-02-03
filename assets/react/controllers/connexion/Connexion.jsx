import React from "react";

const Connexion = () => {
  return (
    <div className="flex">
      <input placeholder="Nom d'utilisateur"></input>
      <input type="password" placeholder="Mot de passe"></input>
      <button className="bg-black ">Se connecter</button>
    </div>
  );
};

export default Connexion;

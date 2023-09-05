import React, { useContext, useEffect, useState } from "react";
import logo from "./../../assets/log.png";
import profile from "../../assets/profile.png";
import start from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import { UserContext, UserProvider } from "../../context/UserProvider";
import { Link } from "react-router-dom";
import userlogo from "../../assets/user.svg"

export default function NavBar() {
  const navigate = useNavigate();
  const { reset } = useContext(UserContext);
  const { insertUserName, nameUser } = useContext(UserContext);

  const handleClick = () => {
    navigate("/");
    reset();
  };

  return (
    <div className="nav-bar-home">
      <div className="nav-bar-logo">
        <img src={logo} onClick={handleClick} />
      </div>
      <div className="nav-bar-user">
        {typeof nameUser[0] == "undefined" ? (
          <Link className="nav-link" to={"/login"}>
            INGRESAR
          </Link>
        ) : (
          <span><img src={userlogo}></img> {nameUser[0].toUpperCase()}</span>
        )}
      </div>
    </div>
  );
}

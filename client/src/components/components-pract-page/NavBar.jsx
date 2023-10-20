import React, { useContext } from "react";
import logo from "./../../assets/log.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { Link } from "react-router-dom";
import userlogo from "../../assets/user.svg";
import "../../pages/style/navBar.css";
import { FiLogOut } from "react-icons/fi";

import { BASE_URL_LOGOUT } from "../../APIS/apisURL";
import axios from "axios";

export default function NavBar() {
  const navigate = useNavigate();
  const { reset } = useContext(UserContext);
  const { nameUser } = useContext(UserContext);

  const handleClick = () => {
    navigate("/");
    reset();
  };

  const handleLogOut = () => {
    axios.get(BASE_URL_LOGOUT);
    navigate("/");
    reset();
  };

  return (
    <div className="nav-bar-home">
      <div className="nav-bar-logo">
        <img src={logo} onClick={handleClick} />
      </div>
      <div className="nav-bar-user">
        {!nameUser ? (
          <Link className="nav-link" to={"/login"}>
            Ingresar
          </Link>
        ) : (
          <div className="box-navbar-logo">
            <div>
              <img className="navbar-logo-user" src={userlogo}></img>{" "}
            </div>
            <span>{nameUser}</span>
            <FiLogOut className="navbar-logout" onClick={handleLogOut} />
          </div>
        )}
      </div>
    </div>
  );
}

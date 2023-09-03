import React, { useContext } from "react";
import logo from "./../../assets/log.png";
import profile from "../../assets/profile.png";
import start from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

export default function NavBar() {
  const navigate = useNavigate();
  const { reset } = useContext(UserContext);

  const handleClick = () => {
    navigate("/");
    reset();
  };
  return (
    <div className="nav-bar-home">
      <div className="nav-bar-logo">
        <img src={logo} onClick={handleClick} />
      </div>
    </div>
  );
}

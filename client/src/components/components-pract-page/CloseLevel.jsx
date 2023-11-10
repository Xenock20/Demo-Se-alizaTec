import React from "react";
import cross from "../../assets/cross.png";
import next from "../../assets/sounds/next.wav";
import { Link } from "react-router-dom";

export default function CloseLevel() {
  const link = "/home";

  const reproducirSonido = () =>{
    const audio = new Audio(next);
    audio.play();
  }

  return (
    <div className="close-level">
      <Link style={{ all: "unset", cursor:"pointer" }} to={link} onClick={reproducirSonido}>
        <img src={cross} />
      </Link>
    </div>
  );
}

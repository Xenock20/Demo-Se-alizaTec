import React, { useContext } from "react";
import rowrigh from "../../assets/rowrigh.png";
import next from "../../assets/sounds/next.wav";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

export default function NextBtn({ link, completado }) {
  const { incrementarBarra } = useContext(UserContext);

  const reproducirSonido = () =>{
    const audio = new Audio(next);
    audio.play();
  }

  return (
    <Link
      to={completado ? link : null}
      className={`next-btn btn ${completado ? "" : "none" }`}
      onClick={completado ? () => { incrementarBarra(); reproducirSonido(); } : ""}
    >
      Siguiente
      <img src={rowrigh} />
    </Link>
  );
}

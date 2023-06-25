import React, { useState } from "react";

import { nivel } from "../../Contenido/Niveles";
import { Link } from "react-router-dom";

const Boton = () => {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [informacion, setInformacion] = useState();
  const [link, setLink] = useState();

  const handleClick = (descripcion, direccion) => {
    setInformacion(descripcion);
    setLink(direccion);
    setMostrarInfo(true);
  };

  const levels = Array(nivel.length).fill(null);
  return (
    <>
      {levels.map((e, index) => {
        const descripcion = nivel[index].descripcion;
        const direccion = nivel[index].link;

        return (
          <button
            className="btn"
            onClick={() => {
              handleClick(descripcion, direccion);
            }}
            key={index}
          >
            {index + 1}
          </button>
        );
      })}
      {mostrarInfo && (
        <div>
          <p>{informacion}</p>
          <Link to={link}>Empezar</Link>
        </div>
      )}
    </>
  );
};

export default Boton;

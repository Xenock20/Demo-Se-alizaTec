import React, { useState } from "react";
import 'animate.css';
import { nivel } from "../../Contenido/Niveles";
import { Link } from "react-router-dom";

const BotonesLevels = () => {
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
      <div className="levels-path">
        {levels.map((e, index) => {
          const descripcion = nivel[index].descripcion;
          const direccion = nivel[index].link;
          const position = nivel[index].position

          return (
            <button
              className={`btn-niveles ${position}`}
              onClick={() => {
                handleClick(descripcion, direccion);
              }}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

<<<<<<< HEAD
        return (
          <button
            className="btn-Niveles"
            onClick={() => {
              handleClick(descripcion, direccion);
            }}
            key={index}
          >
            {index + 1}
          </button>
        );
      })}
=======
>>>>>>> 8821610595153965c9db473db3122926a85c5771
      {mostrarInfo && (
        <div className={`cont-info-level ${mostrarInfo ? "animate__animated animate__bounceInRight": ""}`}>
          <p className="cont-p-level">{informacion}</p>
          <Link to={link} className={`link-level ${link.length === 0 ? "prox" : ""}`}>
            Empezar
          </Link>
        </div>
      )}
    </>
  );
};

export default BotonesLevels;

import React, { useState } from "react";
import "animate.css";
import { nivel } from "../../Contenido/Niveles";
import { Link } from "react-router-dom";
import start from "../../assets/startOne.png";

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
        <div className="path-cap-one">
          <div className="title-dif-one">
            <div className="conjunto">
              <div>
                <img src={start} className="start" alt="Una Estrella" />
              </div>
              <div className="sub-cont">
                <h1 className="title-one">Facil</h1>
              </div>
            </div>
          </div>
          {levels.map((e, index) => {
            const descripcion = nivel[index].descripcion;
            const direccion = nivel[index].link;
            const position = nivel[index].position;
            const cap = nivel[index].cap;
            const positionInfo = nivel[index].positionInfo;

            if (cap === 1) {
              return (
                <div className="btn-level-cont">
                  <button
                    className={`btn-niveles ${position}`}
                    onClick={() => {
                      handleClick(descripcion, direccion);
                    }}
                    key={index}
                  >
                    {index + 1}
                  </button>
                  {mostrarInfo && (
                    <div className={`cont-info-level ${positionInfo}`}>
                      <p className="cont-p-level">{informacion}</p>
                      <Link
                        to={link}
                        className={`link-level ${
                          link.length === 0 ? "prox" : ""
                        }`}
                      >
                        Empezar
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
        <div className="path-cap-two">
          <div className="title-dif-two">
            <div className="conjunto">
              <div>
                <img src={start} className="start" alt="Dos Estrellas" />
                <img src={start} className="start" alt="Dos Estrellas" />
              </div>
              <div className="sub-cont">
                <h1 className="title-two">Medio</h1>
              </div>
            </div>
          </div>
          {levels.map((e, index) => {
            const descripcion = nivel[index].descripcion;
            const direccion = nivel[index].link;
            const position = nivel[index].position;
            const cap = nivel[index].cap;

            if (cap === 2) {
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
            }
          })}
        </div>
        <div className="path-cap-tree">
          <div className="title-dif-tree">
            <div className="conjunto">
              <div>
                <img src={start} alt="Tres Estrellas" />
                <img src={start} alt="Tres Estrellas" />
                <img src={start} alt="Tres Estrellas" />
              </div>
              <div className="sub-cont">
                <h1 className="title-tree">Dificil</h1>
              </div>
            </div>
          </div>
          {levels.map((e, index) => {
            const descripcion = nivel[index].descripcion;
            const direccion = nivel[index].link;
            const position = nivel[index].position;
            const cap = nivel[index].cap;

            if (cap === 3) {
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
            }
          })}
        </div>

        {/* {levels.map((e, index) => {
          const descripcion = nivel[index].descripcion;
          const direccion = nivel[index].link;
          const position = nivel[index].position;

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
        })} */}
      </div>
    </>
  );
};

export default BotonesLevels;

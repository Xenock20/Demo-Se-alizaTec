import React, { useEffect } from "react";
import "../JuegoOperaciones/JuegoOperaciones.css";

import { operaciones } from "../../Contenido/contenidoOperacion";
import { useState } from "react";

const JuegoOperaciones = () => {
  const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * operaciones.length);
  };
  const [numberCopy, setNumberCopy] = useState(generarNumeroAleatorio());
  const [bloquearBoton, setBloquearBoton] = useState(false);
  const [correcto, setCorrecto] = useState(false);
  const [inCorrecto, setIncorrecto] = useState(false);
  const operacionesCopy = operaciones[numberCopy];
  const señas = operacionesCopy.señas;
  const opciones = operacionesCopy.opciones;
  const result = operacionesCopy.resultado;

  const [showImg, setShowImg] = useState(false);
  const [imgSelect, setImgSelect] = useState("");

  const handleReintentar = () => {
    const nuevoNumeroAleatorio = generarNumeroAleatorio();
    setNumberCopy(nuevoNumeroAleatorio);
    setBloquearBoton(false);
    setIncorrecto(false);
    setShowImg(false);
  };

  const handleClick = (imgSeleccionada) => {
    if (imgSeleccionada == result) {
      setCorrecto(true);
    } else {
      setIncorrecto(true);
    }
  };

  return (
    <div className="div-inicial">
      <div className="div-operaciones">
        <div className="div-seña">
          <img className="img-operaciones" src={señas[0]} alt="" />
        </div>
        <div className="div-signo">
          <h1 style={{ color: "white" }}>{operacionesCopy.signo}</h1>
        </div>
        <div className="div-seña">
          <img className="img-operaciones" src={señas[1]} alt="" />
        </div>
        <div className="div-igualdad">
          <h1>=</h1>
        </div>
        <div className="div-resultado">
          {showImg && <img className="img-operaciones" src={imgSelect}></img>}
        </div>
      </div>
      <div>
        {opciones.map((e, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                if (!bloquearBoton) {
                  setBloquearBoton(true);
                  setImgSelect(e);
                  setShowImg(true);
                  handleClick(e);
                } else return;
              }}
            >
              <img className="img-operaciones" src={e}></img>
            </button>
          );
        })}
      </div>
      <div>
        {correcto && <h1>CORRECTO!</h1>}
        {inCorrecto && (
          <div>
            <h1>INCORRECTO!</h1>
            <button onClick={handleReintentar}>Reintentar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JuegoOperaciones;

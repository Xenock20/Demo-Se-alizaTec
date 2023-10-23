import React, { useEffect } from "react";
import "../JuegoOperaciones/JuegoOperaciones.css";
import { operaciones } from "../../Contenido/contenidoOperacion";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "../../components/components-dragDrop/Draggable";
import DropContainer from "../../components/components-dragDrop/DropContainer";

const JuegoOperaciones = ({ gameComplete, reset, gameOver, cont }) => {
  const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * operaciones.length);
  };

  useEffect(() => {
    handleReintentar();
  }, [reset]);
  const [numberCopy, setNumberCopy] = useState(generarNumeroAleatorio());
  const [bloquearBoton, setBloquearBoton] = useState(false);
  const [correcto, setCorrecto] = useState(false);
  const [inCorrecto, setIncorrecto] = useState(false);
  const operacionesCopy = operaciones[numberCopy];
  const señas = operacionesCopy.señas;
  const opciones = operacionesCopy.opciones;
  const result = operacionesCopy.resultado;

  const [showImg, setShowImg] = useState();
  const [imgSelect, setImgSelect] = useState([]);

  const handleReintentar = () => {
    const nuevoNumeroAleatorio = generarNumeroAleatorio();
    setNumberCopy(nuevoNumeroAleatorio);
    setBloquearBoton(false);
    setIncorrecto(false);
    setShowImg(false);
  };

  const handleDragEnd = (event) => {
    const { id } = event.active;
    setImgSelect([id]);
    if (id == result) {
      setCorrecto(true);
      gameComplete();
      setShowImg(true);
      setBloquearBoton(true);
    } else {
      setIncorrecto(true);
      setImgSelect([]);
      gameOver();
    }
  };

  return (
    <DndContext onDragEnd={bloquearBoton ? "" : handleDragEnd}>
      <div className="div-inicial">
        <div className="div-operaciones">
          <div className="div-seña">
            <img className="img-operaciones" src={señas[0]} alt="" />
          </div>
          <div className="div-signo">
            <h1>{operacionesCopy.signo}</h1>
          </div>
          <div className="div-seña">
            <img className="img-operaciones" src={señas[1]} alt="" />
          </div>
          <div className="div-signo">
            <h1>=</h1>
          </div>

          {!showImg ? (
            <div className="div-resultado">
              <DropContainer id={result}></DropContainer>
            </div>
          ) : (
            <div className="div-resultado" style={{ border: "none" }}>
              <img
                className={
                  inCorrecto ? "img-result-icorrecto" : "img-result-correcto"
                }
                src={result}
              ></img>
            </div>
          )}
        </div>

        <div className="div-opciones-operaciones">
          {opciones.map((e, i) => {
            if (imgSelect.includes(e)) return;
            return (
              <Draggable key={i} id={e}>
                <button>
                  <img src={e}></img>
                </button>
              </Draggable>
            );
          })}
        </div>
      </div>
    </DndContext>
  );
};

export default JuegoOperaciones;

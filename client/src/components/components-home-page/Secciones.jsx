import React from "react";
import "../../pages/style/Secciones.css";
import { useState } from "react";

const Secciones = () => {
  const [estilo, setEstilo] = useState({});
  const [styleLetter, setStyleLetter] = useState({});

  const handleClick = () => {
    // setEstilo({
    //   background: "#235293",
    //   width: "97%",
    //   display: "flex",
    //   alignItems: "center",
    //   borderRadius: "13px",
    // });
    // setStyleLetter({ marginLeft: "20px" });
  };
  return (
    <div className="div-principal">
      <div className="div-manejador-secciones">
        <div className="secciones">
          <div className="borde-cian"></div>
          <span>Números</span>
        </div>
        <div className="secciones">
          <div className="borde-cian"></div>
          <span>Colores</span>
        </div>
        <div className="secciones" onClick={handleClick} style={estilo}>
          <div className="borde-cian"></div>
          <span style={styleLetter}>Familia</span>
        </div>
        <div className="secciones">
          <div className="borde-cian"></div>
          <span>Días</span>
        </div>
        <div className="secciones">
          <div className="borde-cian"></div>
          <span>Meses</span>
        </div>
        <div className="secciones">
          <div className="borde-cian"></div>
          <span>Preguntas Basicas</span>
        </div>
      </div>
      <div className="linea-seccion"> </div>
    </div>
  );
};

export default Secciones;

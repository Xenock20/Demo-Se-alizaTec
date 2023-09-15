import React from "react";
import "./JuegoOrdenamiento.css";

import { contOrdenamiento } from "../../Contenido/contenidoOperacion";
import { useState } from "react";

const JuegoOrdenamiento = () => {
  const contOrdenamientoCopy = contOrdenamiento;
  const señas = contOrdenamientoCopy[0].señas;
  const opciones = contOrdenamientoCopy[0].opciones;

  const [seleccio, setseleccio] = useState(second);

  return (
    <div className="div-inicial-ordenamiento">
      <div className="div-img-ordenamiento">
        {señas.map((e, index) => {
          return <img src={e} key={index} />;
        })}
      </div>
      <div className="div-opciones-ordenamiento">
        {opciones.map((e, index) => {
          return <button key={index}>{e}</button>;
        })}
      </div>
    </div>
  );
};

export default JuegoOrdenamiento;

import React from "react";
import AbcLib from "./AbcLib";
import CaminoNiveles from "../../pages/CaminoNiveles";
import "../../pages/style/HomeCont.css";
import Tuto from "./Tuto";
import Secciones from "./Secciones";

export default function HomeCont() {
  return (
    <div className="cont-home">
      <div className="div-secciones">
        <Secciones></Secciones>
      </div>
      <div className="div-camino">
        <CaminoNiveles></CaminoNiveles>
      </div>

      <div className="msj-tuto">
        
      </div>

      <div className="div-abc-tuto">
        <div className="div-manejador">
          <AbcLib></AbcLib>
        </div>
        <div className="div-manejador">
          <Tuto></Tuto>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import "../components/components-home-demo/general/background.css";
import { BtnInicio } from "./componentes/boton/boton.jsx";

const HomeDemo =( ) => {

  return (
    <>
        <div className="box-inicio animate__animated animate__fadeInUp">
          <div className="init">
            <img src="/src/assets/logo.png" alt="" />
            <h1 className="title">Comenzamos</h1>
            <div className="botones">
              <BtnInicio name="Iniciar Demo" estilo="btn1-inicio" />
            </div>
          </div>
        </div>

     
    </>
  );
}

export default HomeDemo;

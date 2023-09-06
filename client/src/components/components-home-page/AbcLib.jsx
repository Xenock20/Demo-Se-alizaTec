import React from "react";
import { Link } from "react-router-dom";

import book from "../../assets/diccionary.svg";
import "../../pages/style/abc.css";

export default function AbcLib() {
  return (
    <Link to={"/abclib"} className="abc-home">
      <div className="caja-diccionario">
        <img src={book} className="diccionary-book" alt="" />
      </div>

      <div className="abc-text">
        <div className="abc-text-abecedario">
          <h5>Abecedario</h5>
        </div>
        <div className="abc-text-p">
          <p className="parrafo-abc">Aprende mas sobre el lenguaje de señas</p>
        </div>
      </div>
    </Link>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { TfiHelp } from "react-icons/tfi";
import "../../pages/style/tuto.css";

const Tuto = () => {
  return (
    <Link
      to={"/tutorial/0"}
      className="caja-diccionario"
      style={{ background: "#74A9DB" }}
    >
      <div>
        <TfiHelp size={60}></TfiHelp>
      </div>
    </Link>
  );
};

export default Tuto;

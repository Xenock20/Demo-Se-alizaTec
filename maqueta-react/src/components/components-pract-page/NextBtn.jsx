import React from "react";
import rowrigh from "../../assets/rowrigh.png";
import { Link } from "react-router-dom";

export default function NextBtn({ link }) {
  return (
    <Link to={link} className="next-btn btn">
      Siguiente
      <img src={rowrigh} />
    </Link>
  );
}

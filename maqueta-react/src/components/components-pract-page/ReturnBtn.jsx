import React from "react";
import rowLeft from "../../assets/rowlefth.png";
import { Link } from "react-router-dom";

export default function ReturnBtn({ link }) {
  return (
    <Link to={link} className="return-btn btn">
      <img src={rowLeft} />
      Atras
    </Link>
  );
}

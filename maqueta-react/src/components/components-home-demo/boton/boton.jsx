import { Link } from "react-router-dom";
import "./boton.css";
export function BtnInicio({ name, estilo }) {
  return (
    <Link to={"/leccion/0"} className={estilo}>
      <span>{name}</span>
    </Link>
  );
}

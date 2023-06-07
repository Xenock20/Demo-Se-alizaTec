import "./boton.css";
export function BtnInicio({ name, estilo }) {
  return (
    <a className={estilo}>
     <span>{name}</span>
    </a>
  );
}

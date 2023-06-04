import "./boton.css";

const Pregunta = ({ pregunta, opciones, onHandleClick, finalGame}) => {
  return (
    <div>
      <h1>{pregunta}</h1>
      {opciones.map((opcion) => (
        <button
          key={opcion.index}
          onClick={() => onHandleClick(opcion)}
          className={`${
            opcion.clicket && opcion.type
              ? "correcta"
              : opcion.clicket && !opcion.type
              ? "incorrecta"
              : ""
          }`}
          disabled={finalGame}
        >
          <img src={opcion.url} alt="Imagen de opción" />
        </button>
      ))}
    </div>
  );
};

export default Pregunta;

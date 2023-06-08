import OptionBtn from "../OptionBtn/OptionBtn";

export default function ContOptions({ options, juegoTerminado, handleClick }) {
  return (
    <div className="opts-adivina-game">

      <h2>Seleccione la palabra que corresponda a la seña</h2>

      {options.map((option) => (
        <OptionBtn
          key={option.index}
          option={option}
          juegoTerminado={juegoTerminado}
          handleClick={handleClick}
        ></OptionBtn>
      ))}
    </div>
  );
}

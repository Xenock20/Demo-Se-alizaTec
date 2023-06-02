import OptionBtn from "../OptionBtn/OptionBtn";

export default function ContOptions({ options, juegoTerminado, handleClick }) {
  return (
    <div className="opts-adivina-game">
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

import Blocke from "../Blocke/Blocke";

export default function Tabla({ animacion, handleClick, blockes }) {

  const estiloTabla = {
    display: 'grid',
    gridTemplateColumns: `repeat(4, 100px)`,
    gridGap: '10px',
    maxWidth: '600px',
    margin: 'auto',
  }

  return (
    <main style={estiloTabla}>
      {blockes.map((blocke, i) => {
        return (
          <Blocke
            key={`${i}_${blocke.name}`}
            animating={animacion}
            handleBlockeClick={handleClick}
            blocke={blocke}
          />
        );
      })}
    </main>
  );
}
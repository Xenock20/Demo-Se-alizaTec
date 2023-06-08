import { useEffect, useState } from "react";
import ContOptions from "../ContOptions/ContOptions";
import ImagenAdivinaGame from "../Imagen/ImagenAdivinaGame";

export default function AdivinaGame({ contenido, gameComplete }) {
  const [options, setOptions] = useState([]);
  const [objetoImage, setObjetoImage] = useState({});
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  useEffect(() => {
    const listOptionCopy = arrayRevuelto([...contenido.options]);
    const objetoImageCopy = contenido.img;
    setOptions(
      listOptionCopy.map((option, i) => ({
        index: i,
        name: option,
        clicket: false,
        result: null,
      }))
    );
    setObjetoImage(objetoImageCopy);
  }, []);

  const arrayRevuelto = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleClick = (option) => {
    let optionsCopy = [...options];

    if (objetoImage.name !== option.name) {
      const optionCopy = { ...option, clicket: true, result: false };
      optionsCopy.splice(option.index, 1, optionCopy);
    } else {
      const optionCopy = { ...option, clicket: true, result: true };
      optionsCopy.splice(option.index, 1, optionCopy);
      gameComplete()
    }
    setOptions(optionsCopy);
    setJuegoTerminado(true);
  };

  return (
    <div className="cont-advina-game">
      <ImagenAdivinaGame img={objetoImage}></ImagenAdivinaGame>

      <ContOptions
        options={options}
        juegoTerminado={juegoTerminado}
        handleClick={handleClick}
      ></ContOptions>
    </div>
  );
}

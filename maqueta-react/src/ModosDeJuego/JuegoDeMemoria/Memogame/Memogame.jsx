import Tabla from "../Tabla/Tabla";
import { useState, useEffect } from "react";
import "./MemoStyle.css";

export default function Memogame({ contenido, gameComplete, style }) {
  const { items } = contenido;

  const [contenidoRevueltoDeLaTabla, setContenidoRevueltoDeLaTabla] = useState(
    []
  );
  const [bloqueSeleccionado, setBloqueSeleccionado] = useState(null);
  const [animacion, setAnimacion] = useState(false);
  const [mostrarJuego, setMostrarJuego] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      iniciarJuego();
    }, 5000);
  }, []);

  const iniciarJuego = () => {
    setMostrarJuego(true);
    const listaContenidoRevuelto = arrayRevuelto([...items]);
    setContenidoRevueltoDeLaTabla(
      listaContenidoRevuelto.map((item, i) => ({
        index: i,
        item: item.item,
        name: item.name,
        flipped: false,
        type: item.type,
      }))
    );

    setTimeout(() => {
      setContenidoRevueltoDeLaTabla(
        listaContenidoRevuelto.map((item, i) => ({
          index: i,
          item: item.item,
          name: item.name,
          flipped: true,
          type: item.type,
        }))
      );
    }, 250);

    setTimeout(() => {
      setContenidoRevueltoDeLaTabla(
        listaContenidoRevuelto.map((item, i) => ({
          index: i,
          item: item.item,
          name: item.name,
          flipped: false,
          type: item.type,
        }))
      );
    }, 1750);
  };

  const arrayRevuelto = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const verifictComplete = (contenido) => {
    return contenido.every((item) => item.flipped);
  };

  const handleClick = (blocke) => {
    const blockeDadoVuelta = { ...blocke, flipped: true };
    let contenidoRevueltoDeLaTablaCopia = [...contenidoRevueltoDeLaTabla];
    contenidoRevueltoDeLaTablaCopia.splice(blocke.index, 1, blockeDadoVuelta);
    setContenidoRevueltoDeLaTabla(contenidoRevueltoDeLaTablaCopia);
    if (bloqueSeleccionado === null) {
      setBloqueSeleccionado(blocke);
    } else if (bloqueSeleccionado.name === blocke.name) {
      setBloqueSeleccionado(null);
      if (verifictComplete(contenidoRevueltoDeLaTablaCopia)) {
        gameComplete();
      }
    } else {
      setAnimacion(true);
      setTimeout(() => {
        contenidoRevueltoDeLaTablaCopia.splice(blocke.index, 1, blocke);
        contenidoRevueltoDeLaTablaCopia.splice(
          bloqueSeleccionado.index,
          1,
          bloqueSeleccionado
        );
        setContenidoRevueltoDeLaTabla(contenidoRevueltoDeLaTablaCopia);
        setBloqueSeleccionado(null);
        setAnimacion(false);
      }, 1000);
    }
  };

  return (
    <div className="memo-game-cont">
      {!mostrarJuego && (
        <div className="info-game">
          {" "}
          <p>!</p>
          <span>
            Juego de Memoria: indique la palabra con su respectiva seña.
          </span>{" "}
        </div>
      )}

      {mostrarJuego && (
        <Tabla
          blockes={contenidoRevueltoDeLaTabla}
          animacion={animacion}
          handleClick={handleClick}
          style={style}
        />
      )}
    </div>
  );
}

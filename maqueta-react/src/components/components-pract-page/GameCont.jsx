import React from "react";
import Memogame from "./../../ModosDeJuego/JuegoDeMemoria/Memogame/Memogame";
import AdivinaGame from "./../../ModosDeJuego/AdivinanzaDeSeñas/AdivinaGame/AdivinaGame";
import ErrorGame from "./../../ModosDeJuego/JuegoDeIdentificacionDeErrores/ErrorGame/ErrorGame";
import { GameDeEmparejamiento } from "../../ModosDeJuego/JuegoDeEmparejamiento/juegoDeEmparejamiento";

export default function GameCont({ contJuego }) {
  const { modeGame } = contJuego;
  const { cont } = contJuego;
  let componente;

  switch (modeGame) {
    case "juego-de-emparejamiento":
      componente = <GameDeEmparejamiento contenido={cont}></GameDeEmparejamiento>;
      break;
    case "juego-de-memoria":
      componente = <Memogame contenido={cont}></Memogame>
      break;
    case "adivinanza-de-señas":
      componente = <AdivinaGame contenido={cont}></AdivinaGame>
      break;
    case "juego-de-ordenamiento":
      componente = <div>"juego-de-ordenamiento"</div>
      break;
    case "juego-de-completar":
      componente = <div>"juego-de-completar"</div>
      break;
    case "juego-de-identificar-errores":
      componente = <ErrorGame contenido={cont}></ErrorGame>
      break;
    default:
      componente = null;
      break;
  }

  return <div className="game-cont">{componente}</div>;
}

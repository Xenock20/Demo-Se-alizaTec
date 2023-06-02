import React from 'react'
import Memogame from './../../ModosDeJuego/JuegoDeMemoria/Memogame/Memogame';
import { arrayCont, adivinaGame } from '../../Contenido/contenidoEjemplo';
import AdivinaGame from './../../ModosDeJuego/AdivinanzaDeSeñas/AdivinaGame/AdivinaGame';

export default function GameCont() {
  return (
    <div className="game-cont">
      <AdivinaGame contenido={adivinaGame}></AdivinaGame>
    </div>
  )
}

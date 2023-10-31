import React, { useContext, useEffect, useState } from "react";
import NavBar from "./../components/components-pract-page/NavBar";
import ContTop from "./../components/components-pract-page/ContTop";
import GameCont from "./../components/components-pract-page/GameCont";
import ButtonCont from "./../components/components-pract-page/ButtonCont";
import wrong from "../../src/assets/sounds/wrong.wav";
import correct from "../../src/assets/sounds/correct.wav";
import { useParams } from "react-router";
import { contGames } from "../Contenido/ContenidoGame";
import { UserContext } from "../context/UserProvider";
import BotonReset from "../ModosDeJuego/BotonReset/BotonReset";

export default function PractPage() {
  const { id } = useParams();
  const [links, setLinks] = useState({});
  const [completado, setCompletado] = useState(false);
  const [deblock, setDeblock] = useState({});
  const [contenidoDelJuego, setContenidoDelJuego] = useState({});
  const [reset, setReset] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const { desbloquearLeccion, desbloquearModoJuego, desbloquearNiveles } =
    useContext(UserContext);

  useEffect(() => {
    const contGame = contGames[id];
    setContenidoDelJuego(contGame);
    setLinks(contGame.link);
    setCompletado(false);
    setDeblock(contGame.desblock);
  }, [id]);


/**
 * Esta funcion desbloquea las rutas para acceder a los siguientes modos de juego, lecciones o niveles.
 */
  const handleCompleteGame = () => {
    const audio = new Audio(correct);
    audio.play();
    setCompletado(true);
    //deblock.leccionID.map((id) => console.log(id) /*desbloquearLeccion(id)*/);
    desbloquearLeccion(deblock.leccionID)
    desbloquearModoJuego(deblock.modeGameID)
    //deblock.modeGameID.map((id) => desbloquearModoJuego(id));
    desbloquearNiveles(deblock.levelID)
    //deblock.levelID.map((id) => desbloquearNiveles(id));
  };

  const reiniciarComponente = () => {
    setReset(!reset); // Cambia el valor de 'reset' para activar el useEffect
    setGameOver(false);
  };

  const gameOverShow = () => {
    const audio = new Audio(wrong);
    audio.play();
    setGameOver(true);
  };

  return (
    <div className="home-page">
      <NavBar></NavBar>
      <div className="cont-home">
        <ContTop></ContTop>
      </div>
      <GameCont
        contJuego={contenidoDelJuego}
        handleCompleteGame={handleCompleteGame}
        reset={reset}
        gameOver={gameOverShow}
      ></GameCont>
      <ButtonCont links={links} completado={completado}></ButtonCont>
      {<BotonReset gameOver={gameOver} onReset={reiniciarComponente} />}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import NavBar from "./../components/components-pract-page/NavBar";
import ContTop from "./../components/components-pract-page/ContTop";
import GameCont from "./../components/components-pract-page/GameCont";
import ButtonCont from "./../components/components-pract-page/ButtonCont";
import { useParams } from "react-router";
import { contGames } from "../Contenido/ContenidoGame";

export default function PractPage() {
  const { id } = useParams();
  const [links, setLinks] = useState({})

  const [contenidoDelJuego, setContenidoDelJuego] = useState({});

  useEffect(() => {
    const contGame = contGames[id];
    setContenidoDelJuego(contGame);
    setLinks(contGame.link)
  }, []);

  return (
    <div className="home-page">
      <NavBar></NavBar>
      <div className="cont-home">
        <ContTop></ContTop>
      </div>
      <GameCont contJuego={contenidoDelJuego}></GameCont>
      <ButtonCont links={links}></ButtonCont>
    </div>
  );
}

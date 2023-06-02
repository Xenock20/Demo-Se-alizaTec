import React from "react";
import NavBar from "./../components/components-pract-page/NavBar";
import ContTop from './../components/components-pract-page/ContTop';
import GameCont from './../components/components-pract-page/GameCont';
import ButtonCont from './../components/components-pract-page/ButtonCont';
import { useParams } from "react-router";

export default function PractPage() {

  const { id } = useParams();

  console.log(id);

  return (
    <div className="home-page">
      <NavBar></NavBar>
      <div className="cont-home">
        <ContTop></ContTop>
      </div>
      <GameCont></GameCont>
      <ButtonCont></ButtonCont>
    </div>
  );
}

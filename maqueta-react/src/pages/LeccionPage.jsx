import React from "react";
import NavBar from "./../components/components-pract-page/NavBar";
import ContTop from "./../components/components-pract-page/ContTop";
import ButtonCont from "./../components/components-pract-page/ButtonCont";
import { useParams } from "react-router";

export default function LeccionPage() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="home-page">
      <NavBar></NavBar>
      <div className="cont-home">
        <ContTop></ContTop>
        <div className="leccion-cont">
          <h1>Titulo de la leccion</h1>
          <p></p>
        </div>
        <ButtonCont></ButtonCont>
      </div>
    </div>
  );
}

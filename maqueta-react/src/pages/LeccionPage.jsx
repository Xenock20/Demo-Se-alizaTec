import React, { useEffect, useState } from "react";
import NavBar from "./../components/components-pract-page/NavBar";
import ContTop from "./../components/components-pract-page/ContTop";
import ButtonCont from "./../components/components-pract-page/ButtonCont";
import { useParams } from "react-router";
import { lecciones } from "./../Contenido/Lecciones";
import ContPrincipal from "../components/components-leccion-page/ContPrincipal";
import ContSecundario from "../components/components-leccion-page/ContSecundario";
import 'animate.css';

export default function LeccionPage() {
  const {id} = useParams()
  const [titulo, setTitulo] = useState("");
  const [contPrincipal, setContPrincipal] = useState("");
  const [contSecundario, setContSecundario] = useState([]);
  const [links, setLinks] = useState({})

  useEffect(() => {
    const leccionCopia = lecciones[id];

    setTitulo(leccionCopia.titulo);
    setContPrincipal(leccionCopia.contenido.contPrincipal);
    setContSecundario(leccionCopia.contenido.contSecundario);
    setLinks(leccionCopia.link)
  }, [id]);

  return (
    <div className="home-page animate__animated animate__fadeIn">
      <NavBar></NavBar>
      <div className="cont-home">
        <ContTop></ContTop>
        <div className="leccion-cont animate__animated animate__fadeIn">
          <h1>{titulo}</h1>
          <ContPrincipal text={contPrincipal}></ContPrincipal>
          <ContSecundario cont={contSecundario}></ContSecundario>
        </div>
        <ButtonCont links={links}></ButtonCont>
      </div>
    </div>
  );
}

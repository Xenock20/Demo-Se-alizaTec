import React, { useContext } from "react";
import NavBar from "../components/components-pract-page/NavBar";
import HomeCont from "../components/components-home-page/HomeCont";
import 'animate.css';
export default function HomePage() {
  return (
    <div className="home-page animate__animated animate__fadeIn">
      <NavBar></NavBar>
      <HomeCont></HomeCont>
    </div>
  );
}

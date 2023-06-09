import React, { useContext, useEffect } from "react";
import NavBar from "../components/components-pract-page/NavBar";
import HomeCont from "../components/components-home-page/HomeCont";

export default function HomePage() {

  return (
    <div className="home-page">
      <NavBar></NavBar>
      <HomeCont></HomeCont>
    </div>
  );
}

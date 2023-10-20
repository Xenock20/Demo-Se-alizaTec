import React, { useContext, useEffect } from "react";
import NavBar from "../components/components-pract-page/NavBar";
import HomeCont from "../components/components-home-page/HomeCont";
import "animate.css";
import { UserContext } from "../context/UserProvider";
import { useGet } from "../hooks/useFetch";
import UnAuthenticated from "../components/unAuthenticated/unAuthenticated";
import { useState } from "react";

import { BASE_URL_DATA } from "../APIS/apisURL";
export default function HomePage() {
  const {
    resetBarr,
    insertUserName,
    desbloquearNiveles,
    desbloquearLeccion,
    desbloquearModoJuego,
  } = useContext(UserContext);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    resetBarr();
  }, [resetBarr]);

  const { data, error } = useGet(BASE_URL_DATA);

  const verifyAuthenticated = (dataUser) => {
    if (!dataUser) {
      return;
    }
    insertUserName(dataUser.data.user);

    const levelsUnlocked = JSON.parse(dataUser.data.nivel);
    const lessonsUnlocked = JSON.parse(dataUser.data.lecciones);
    const modeGameUnlocked = JSON.parse(dataUser.data.modoJuego);

    if (!levelsUnlocked) {
      return setIsAuthenticated(true);
    }

    desbloquearNiveles(levelsUnlocked);
    desbloquearLeccion(lessonsUnlocked);
    desbloquearModoJuego(modeGameUnlocked);

    return setIsAuthenticated(true);
  };

  useEffect(() => {
    verifyAuthenticated(data);
  }, [data]);

  return (
    <div style={{ background: "rgba(19, 19, 19, 0.9)" }}>
      {isAuthenticated && (
        <div className="home-page animate__animated animate__fadeIn">
          <NavBar />

          <HomeCont />
        </div>
      )}
      {error && <UnAuthenticated />}
    </div>
  );
}

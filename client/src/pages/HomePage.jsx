import React, { useContext, useEffect } from "react";
import NavBar from "../components/components-pract-page/NavBar";
import HomeCont from "../components/components-home-page/HomeCont";
import "animate.css";
import { UserContext } from "../context/UserProvider";
import { useGet } from "../hooks/useFetch";
import UnAuthenticated from "../components/unAuthenticated/unAuthenticated";
import { useState } from "react";

export default function HomePage() {
  const { resetBarr, insertUserName, desbloquearNiveles } =
    useContext(UserContext);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    resetBarr();
  }, [resetBarr]);

  const { data, error } = useGet("http://localhost:3000/datos");

  const verifyAuthenticated = (dataUser) => {
    if (!dataUser) {
      return;
    }
    insertUserName(dataUser.data.user);
    const niveles = JSON.parse(dataUser.data.nivel);
    niveles.map((nivel) => {
      if (nivel > 0) {
        return desbloquearNiveles(nivel);
      }

      return;
    });

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

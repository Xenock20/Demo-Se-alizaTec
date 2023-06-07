import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [leccionesDesbloqueadas, setLeccionesDesbloqueadas] = useState(() => {
    const storedLecciones = localStorage.getItem("leccionesDesbloqueadas");
    return storedLecciones ? JSON.parse(storedLecciones) : [0, 1];
  });
  const [modosJuegoDesbloqueados, setModosJuegoDesbloqueados] = useState(() => {
    const storedModosJuegos = localStorage.getItem("modosJuegosDesbloqueados");
    return storedModosJuegos ? JSON.parse(storedModosJuegos) : [0];
  });

  useEffect(() => {
    localStorage.setItem(
      "leccionesDesbloqueadas",
      JSON.stringify(leccionesDesbloqueadas)
    );
  }, [leccionesDesbloqueadas]);

  useEffect(() => {
    localStorage.setItem(
      "modosJuegosDesbloqueados",
      JSON.stringify(modosJuegoDesbloqueados)
    );
  }, [modosJuegoDesbloqueados]);

  const desbloquearLeccion = (id) => {
    setLeccionesDesbloqueadas([...leccionesDesbloqueadas, id]);
  };

  const desbloquearModoJuego = (id) => {
    setModosJuegoDesbloqueados([...modosJuegoDesbloqueados, id]);
  };

  const userState = {
    leccionesDesbloqueadas,
    modosJuegoDesbloqueados,
    desbloquearLeccion,
    desbloquearModoJuego,
  };

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };

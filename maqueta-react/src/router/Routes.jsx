import { Routes, Route, useParams, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LeccionPage from "../pages/LeccionPage";
import PractPage from "./../pages/PractPage";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/leccion/:id" element={<LeccionPageWrapper />}></Route>
      <Route path="/mododejuego/:id" element={<PractPageWrapper />}></Route>
    </Routes>
  );
}

const LeccionPageWrapper = () => {
  const { id } = useParams();
  const { leccionesDesbloqueadas } = useContext(UserContext);
  const leccionId = parseInt(id);

  const tieneAcceso = leccionesDesbloqueadas.includes(leccionId);

  return tieneAcceso ? <LeccionPage /> : <Navigate to="/" replace />;
};

const PractPageWrapper = () => {
  const { id } = useParams();
  const { modosJuegoDesbloqueados } = useContext(UserContext);
  const modoJuegoId = parseInt(id);

  const tieneAcceso = modosJuegoDesbloqueados.includes(modoJuegoId);

  return tieneAcceso ? <PractPage /> : <Navigate to="/" replace />;
};

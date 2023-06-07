import { Routes, Route, useParams, Navigate } from "react-router-dom";
import LeccionPage from "../pages/LeccionPage";
import PractPage from "./../pages/PractPage";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import HomeDemo from './../pages/HomeDemo';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomeDemo />}></Route>
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

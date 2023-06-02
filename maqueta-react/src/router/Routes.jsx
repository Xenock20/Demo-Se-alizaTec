import { Routes , Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LeccionPage from "../pages/LeccionPage";
import PractPage from "./../pages/PractPage";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/leccion/:id" element={<LeccionPage/>}></Route>
      <Route path="/mododejuego/:id" element={<PractPage/>}></Route>
    </Routes>
  );
}

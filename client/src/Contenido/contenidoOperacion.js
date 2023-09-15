import uno from "../Contenido/Image/N1-Numeros/1.png";
import dos from "../Contenido/Image/N1-Numeros/2.png";
import tres from "../Contenido/Image/N1-Numeros/3.png";
import cuatro from "../Contenido/Image/N1-Numeros/4.png";
import cinco from "../Contenido/Image/N1-Numeros/5.png";
import seis from "../Contenido/Image/N1-Numeros/6.png";
import siete from "../Contenido/Image/N1-Numeros/7.png";
import ocho from "../Contenido/Image/N1-Numeros/8.png";
import nueve from "../Contenido/Image/N1-Numeros/9.png";
import diez from "../Contenido/Image/N1-Numeros/10.png";

export const operaciones = [
  {
    id: 1,
    señas: [uno, dos],
    signo: "+",
    resultado: tres,
    opciones: [cuatro, cinco, tres],
  },
  {
    id: 2,
    señas: [cuatro, uno],
    signo: "+",
    resultado: cinco,
    opciones: [cinco, dos, tres],
  },
  {
    id: 3,
    señas: [cuatro, dos],
    signo: "-",
    resultado: dos,
    opciones: [uno, tres, dos],
  },
];

export const contOrdenamiento = [
  {
    id: 0,
    señas: [uno, dos, tres],
    opciones: ["rojo", "azul", "amarillo"],
    orden: ["rojo", uno, "azul", dos],
  },
  { id: 1, señas: "", opciones: "azul" },
  { id: 2, señas: "", opciones: "amarillo" },
];

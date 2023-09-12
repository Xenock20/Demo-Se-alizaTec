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
    señas: [seis, tres],
    signo: "+",
    resultado: nueve,
    opciones: [nueve, cinco, tres],
  },
  {
    id: 2,
    señas: [cuatro, dos],
    signo: "-",
    resultado: dos,
    opciones: [dos, seis, nueve],
  },
  {
    id: 3,
    señas: [nueve, uno],
    signo: "+",
    resultado: diez,
    opciones: [diez, cuatro, siete],
  },
  {
    id: 4,
    señas: [tres, uno],
    signo: "-",
    resultado: uno,
    opciones: [diez, cuatro, siete],
  },
];

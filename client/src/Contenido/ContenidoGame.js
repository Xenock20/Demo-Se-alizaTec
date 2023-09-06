import vocalA from "./Image/N0-Vocales/A_v2_G.png";
import vocalE from "./Image/N0-Vocales/E_v2_G.png";
import vocalI from "./Image/N0-Vocales/i-bn.png";
import vocalO from "./Image/N0-Vocales/O_v2_G.png";
import vocalU from "./Image/N0-Vocales/U_v2_G.png";
import num1 from "./Image/N1-Numeros/1.png";
import num2 from "./Image/N1-Numeros/2.png";
import num3 from "./Image/N1-Numeros/3.png";
import num4 from "./Image/N1-Numeros/4.png";
import num5 from "./Image/N1-Numeros/5.png";
import num6 from "./Image/N1-Numeros/6.png";
import num7 from "./Image/N1-Numeros/7.png";
import num8 from "./Image/N1-Numeros/8.png";
import num9 from "./Image/N1-Numeros/9.png";
import num10 from "./Image/N1-Numeros/10.png";

export const contGames = [
  {
    id: 0,
    modeGame: "juego-de-emparejamiento",
    cont: {
      text: "¿Cuál de estas señas significa 'A'?",
      option: [
        {
          url: vocalE,
          type: false,
        },
        {
          url: vocalU,
          type: false,
        },
        {
          url: vocalI,
          type: false,
        },
        {
          url: vocalA,
          type: true,
        },
      ],
    },
    link: {
      return: "/leccion/1",
      next: "/leccion/2",
    },
    desblock: {
      leccionID: [2],
      modeGameID: [1],
      levelID: [],
    },
  },
  {
    id: 1,
    modeGame: "juego-de-completar",
    cont: {
      text: "Elefante comienza con la vocal ...",
      option: [
        {
          url: vocalE,
          type: true,
        },
        {
          url: vocalO,
          type: false,
        },
        {
          url: vocalI,
          type: false,
        },
        {
          url: vocalU,
          type: false,
        },
      ],
    },
    link: {
      return: "/leccion/2",
      next: "/leccion/3",
    },
    desblock: {
      leccionID: [3],
      modeGameID: [2],
      levelID: [],
    },
  },
  {
    id: 2,
    modeGame: "juego-de-memoria",
    cont: {
      items: [
        {
          item: "A",
          name: "A",
          type: "text",
        },
        {
          item: "E",
          name: "E",
          type: "text",
        },
        {
          item: "I",
          name: "I",
          type: "text",
        },
        {
          item: "O",
          name: "O",
          type: "text",
        },
        {
          item: "U",
          name: "U",
          type: "text",
        },
        {
          item: vocalA,
          name: "A",
          type: "img",
        },
        {
          item: vocalE,
          name: "E",
          type: "img",
        },
        {
          item: vocalI,
          name: "I",
          type: "img",
        },
        {
          item: vocalO,
          name: "O",
          type: "img",
        },
        {
          item: vocalU,
          name: "U",
          type: "img",
        },
      ],
    },
    link: {
      return: "/leccion/3",
      next: "/mododejuego/3",
    },
    desblock: {
      leccionID: [],
      modeGameID: [3],
      levelID: [],
    },
    style: {
      grid_repet: 5,
      maxWidth: "800px",
    },
  },
  {
    id: 3,
    modeGame: "adivinanza-de-señas",
    cont: {
      img: [
        {
          url: vocalA,
          name: "A",
        },
        {
          url: vocalU,
          name: "U",
        },
        {
          url: vocalE,
          name: "E",
        },
        {
          url: vocalI,
          name: "I",
        },
      ],
      options: ["A", "E", "I", "O", "U"],
    },
    link: {
      return: "/mododejuego/2",
      next: "/home",
    },
    desblock: {
      leccionID: [4],
      modeGameID: [4],
      levelID: [2],
    },
  },
  {
    id: 4,
    modeGame: "juego-de-memoria",
    cont: {
      items: [
        {
          item: "5",
          name: "5",
          type: "text",
        },
        {
          item: "2",
          name: "2",
          type: "text",
        },
        {
          item: "4",
          name: "4",
          type: "text",
        },
        {
          item: "3",
          name: "3",
          type: "text",
        },
        {
          item: "1",
          name: "1",
          type: "text",
        },
        {
          item: num4,
          name: "4",
          type: "img",
        },
        {
          item: num3,
          name: "3",
          type: "img",
        },
        {
          item: num5,
          name: "5",
          type: "img",
        },
        {
          item: num2,
          name: "2",
          type: "img",
        },
        {
          item: num1,
          name: "1",
          type: "img",
        },
      ],
    },
    link: {
      return: "/leccion/4",
      next: "/leccion/5",
    },
    desblock: {
      leccionID: [5, 6],
      modeGameID: [5],
      levelID: [],
    },
    style: {
      grid_repet: 5,
      maxWidth: "800px",
    },
  },
  {
    id: 5,
    modeGame: "juego-de-emparejamiento",
    cont: {
      text: '¿Cuantas letras contiene la palabra "ESCUELA"?',
      option: [
        {
          url: num6,
          type: false,
        },
        {
          url: num3,
          type: false,
        },
        {
          url: num1,
          type: false,
        },
        {
          url: num7,
          type: true,
        },
      ],
    },
    link: {
      return: "/leccion/6",
      next: "/leccion/7",
    },
    desblock: {
      leccionID: [7],
      modeGameID: [6],
      levelID: [],
    },
  },
  {
    id: 6,
    modeGame: "adivinanza-de-señas",
    cont: {
      img: [
        {
          url: num6,
          name: "6",
        },
        {
          url: num8,
          name: "8",
        },
        {
          url: num9,
          name: "9",
        },
        {
          url: num7,
          name: "7",
        },
      ],
      options: ["6", "8", "9", "7", "10"],
    },
    link: {
      return: "/leccion/7",
      next: "/mododejuego/7",
    },
    desblock: {
      leccionID: [],
      modeGameID: [7],
      levelID: [],
    },
  },
  {
    id: 7,
    modeGame: "juego-de-emparejamiento",
    cont: {
      text: 'Cual es el resultado de 4 + 5 = ?',
      option: [
        {
          url: num1,
          type: false,
        },
        {
          url: num10,
          type: false,
        },
        {
          url: num6,
          type: false,
        },
        {
          url: num9,
          type: true,
        },
      ],
    },
    link: {
      return: "/mododejuego/6",
      next: "/finaldemo",
    },
    desblock: {
      leccionID: [7],
      modeGameID: [],
      levelID: [],
    },
  },
];

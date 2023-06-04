import vocalA from "./Image/N0-Vocales/A.png";
import vocalE from "./Image/N0-Vocales/E.png";
import vocalI from "./Image/N0-Vocales/I.png";
import vocalO from "./Image/N0-Vocales/O.png";
import vocalU from "./Image/N0-Vocales/U.png";

export const contGame = [
  {
    id: 0,
    modeGame: "juego-de-emparejamiento",
    cont: {
      text: "Cual de estas señas significa 'A'?",
      option: [
        {
          url: vocalE,
          type: false,
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
          url: vocalA,
          type: true,
        },
      ],
    },
  },
  {
    id: 1,
    modeGame: "juego-de-completar",
    cont: {
      text: "La palabra (alguna palabra con e) comienza con la vocal ___",
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
  },
  {
    id: 2,
    modeGame: "juego-de-memoria",
    cont: {
      items: [
        {
          item: "A",
          name: "A",
        },
        {
          item: "E",
          name: "E",
        },
        {
          item: "I",
          name: "I",
        },
        {
          item: "O",
          name: "O",
        },
        {
          item: "U",
          name: "U",
        },
        {
          item: vocalA,
          name: "A",
        },
        {
          item: vocalE,
          name: "E",
        },
        {
          item: vocalI,
          name: "I",
        },
        {
          item: vocalO,
          name: "O",
        },
        {
          item: vocalU,
          name: "U",
        },
      ],
    },
  },
  {
    id: 3,
    modeGame: "adivinanza-de-señas",
    cont: {},
  },
];

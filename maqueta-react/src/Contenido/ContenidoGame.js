import vocalA from "./Image/N0-Vocales/A.png";
import vocalE from "./Image/N0-Vocales/E.png";
import vocalI from "./Image/N0-Vocales/I.png";
import vocalO from "./Image/N0-Vocales/O.png";
import vocalU from "./Image/N0-Vocales/U.png";

export const contGames = [
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
    link:{
      return: "/leccion/1",
      next: "/leccion/2"
    },
    desblock: {
      leccionID: [2],
      modeGameID: [1]
    }
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
    link:{
      return: "/leccion/2",
      next: "/leccion/3"
    },
    desblock: {
      leccionID: [3],
      modeGameID: [2]
    }
  },
  {
    id: 2,
    modeGame: "juego-de-memoria",
    cont: {
      items: [
        {
          item: "A",
          name: "A",
          type: "text"
        },
        {
          item: "E",
          name: "E",
          type: "text"
        },
        {
          item: "I",
          name: "I",
          type: "text"
        },
        {
          item: "O",
          name: "O",
          type: "text"
        },
        {
          item: "U",
          name: "U",
          type: "text"
        },
        {
          item: vocalA,
          name: "A",
          type: "img"
        },
        {
          item: vocalE,
          name: "E",
          type: "img"
        },
        {
          item: vocalI,
          name: "I",
          type: "img"
        },
        {
          item: vocalO,
          name: "O",
          type: "img"
        },
        {
          item: vocalU,
          name: "U",
          type: "img"
        },
      ],
    },
    link:{
      return: "/leccion/2",
      next: "/mododejuego/3"
    },
    desblock: {
      leccionID: [],
      modeGameID: [3]
    },
    style: {
      grid_repet: 5,
      maxWidth: "800px"
    }
  },
  {
    id: 3,
    modeGame: "adivinanza-de-señas",
    cont: {
      img: {
        url: vocalO,
        name: "O"
      },
      options: [
        "A",
        "E",
        "I",
        "O",
        "U"
      ]
    },
    link:{
      return: "/mododejuego/2",
      next: "/"
    },
    desblock: {
      leccionID: [],
      modeGameID: []
    }
  },
];

import {
  dataCMovieShape,
  dataMovieShape,
} from "../types/data/dataMovieInterface";

export const dataMovie: dataMovieShape[] = [
  {
    frontpage: "./components/imageMS/alice-banner.png",
    title: "Alice in Borderland",
    sinopsis: "string",
    created: "Shinsuke Sato",
    starring: "Kento Yamazaki, Tao Tsuchiya, Keita Machida...",
  },
  {
    frontpage: "/components/imageMS/ourflag-banner.png",
    title: "Our flag means death",
    sinopsis: "string",
    created: "David Jenkins",
    starring: "Rhys Darby, Taika Waititi, Kristian Nairn, Nathan Foad...",
  },
];

const dataCMovieShape: dataCMovieShape[] = [
  {
    id: "A1",
    photo: "./components/imageCharacters/alice/Ann.png",
    name: "Ann",
  },
  {
    id: "A2",
    photo: "./components/imageCharacters/alice/Arisu.png",
    name: "Arisu",
  },
  {
    id: "A3",
    photo: "./components/imageCharacters/alice/Hikari.png",
    name: "Hikari",
  },
  {
    id: "A4",
    photo: "./components/imageCharacters/alice/Shuntaro.png",
    name: "Shuntaro",
  },
  {
    id: "O1",
    photo: "./components/imageCharacters/ourflag/stede.png",
    name: "Stede Bonnet",
  },
  {
    id: "O2",
    photo: "./components/imageCharacters/ourflag/ed.png",
    name: "Edward (Ed) Teach",
  },
  {
    id: "O3",
    photo: "./components/imageCharacters/ourflag/lucius.png",
    name: "Lucius",
  },
  {
    id: "O4",
    photo: "./components/imageCharacters/ourflag/olu.png",
    name: "Oluwande",
  },
];

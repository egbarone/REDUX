import { COLORS } from "../constants/colors";
import CervezasRubias from "../assets/c1.jpg";
import CervezaRoja from "../assets/c3.jpg";
import CervezaNegra from "../assets/c4.jpg";
import CervezaPorter from "../assets/c5.jpg";

export const CATEGORIES = [
  {
    id: "1",
    title: "Cervezas Rubias",
    img:CervezasRubias,
    color: COLORS.primary,
    icon: "home",
  },
  {
    id: "2",
    title: "Cerveza Roja",
    img: CervezaRoja,
    color: COLORS.secondary,
  },
  {
    id: "3",
    title: "Cerveza Negra",
    img: CervezaNegra,
    color: COLORS.tertiary,
  },
  {
    id: "4",
    title: "Cerveza Porter",
    img: CervezaPorter,
    color: COLORS.quaternary,
  },
];

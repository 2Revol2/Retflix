import {
  GiStarsStack,
  GiVampireCape,
  GiShamblingZombie,
  GiNuclearBomb,
  GiMagicHat,
} from "react-icons/gi";
import { WiStars } from "react-icons/wi";
import { MdMenuBook, MdFamilyRestroom } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import { FaTv } from "react-icons/fa6";
import { RoutePath } from "../config/routeConfig";

export const SIDEBAR_MENU_TOP = [
  {
    title: "Популярные фильмы",
    icon: <GiStarsStack />,
    url: RoutePath.popular_films,
    value: "TOP_POPULAR_MOVIES",
  },
  {
    title: "Топ 250 фильмов",
    icon: <WiStars />,
    url: RoutePath.top_250,
    value: "TOP_250_MOVIES",
  },
  {
    title: "Вампиры",
    icon: <GiVampireCape />,
    url: RoutePath.vampire,
    value: "VAMPIRE_THEME",
  },
  {
    title: "Комиксы",
    icon: <MdMenuBook />,
    url: RoutePath.comics,
    value: "COMICS_THEME",
  },
  {
    title: "Семейный",
    icon: <MdFamilyRestroom />,
    url: RoutePath.family,
    value: "FAMILY",
  },
  {
    title: "Романтика",
    icon: <FaHeart />,
    url: RoutePath.romantic,
    value: "LOVE_THEME",
  },
  {
    title: "Зомби",
    icon: <GiShamblingZombie />,
    url: RoutePath.zombie,
    value: "ZOMBIE_THEME",
  },
  {
    title: "Катастрофы",
    icon: <GiNuclearBomb />,
    url: RoutePath.catastrophe,
    value: "CATASTROPHE_THEME",
  },
  {
    title: "Популярные сериалы",
    icon: <BiCameraMovie />,
    url: RoutePath.poppular_serials,
    value: "POPULAR_SERIES",
  },
];

export const SIDEBAR_MENU_BOTTOM = [
  {
    title: "Фильмы",
    icon: <BiMoviePlay />,
    url: RoutePath.films,
    value: "FILM",
  },
  {
    title: "Сериалы",
    icon: <FaTv />,
    url: RoutePath.serials,
    value: "TV_SERIES",
  },
  {
    title: "Мультфильмы",
    icon: <GiMagicHat />,
    url: RoutePath.cartoons,
    value: "FILM",
  },
];

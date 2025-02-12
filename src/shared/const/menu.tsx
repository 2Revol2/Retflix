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

export const SIDEBAR_MENU_TOP = [
  {
    title: "Популярные фильмы",
    icon: <GiStarsStack />,
    url: "/popular",
    value: "TOP_POPULAR_MOVIES",
  },
  {
    title: "Топ 250 фильмов",
    icon: <WiStars />,
    url: "/top250",
    value: "TOP_250_MOVIES",
  },
  {
    title: "Вампиры",
    icon: <GiVampireCape />,
    url: "/vampire",
    value: "VAMPIRE_THEME",
  },
  {
    title: "Комиксы",
    icon: <MdMenuBook />,
    url: "/comics",
    value: "COMICS_THEME",
  },
  {
    title: "Семейный",
    icon: <MdFamilyRestroom />,
    url: "/family",
    value: "FAMILY",
  },
  {
    title: "Романтика",
    icon: <FaHeart />,
    url: "/romantic",
    value: "LOVE_THEME",
  },
  {
    title: "Зомби",
    icon: <GiShamblingZombie />,
    url: "/zombie",
    value: "ZOMBIE_THEME",
  },
  {
    title: "Катастрофы",
    icon: <GiNuclearBomb />,
    url: "/catastrophe",
    value: "CATASTROPHE_THEME",
  },
  {
    title: "Популярные сериалы",
    icon: <BiCameraMovie />,
    url: "/popular/serials",
    value: "POPULAR_SERIES",
  },
];

export const SIDEBAR_MENU_BOTTOM = [
  {
    title: "Фильмы",
    icon: <BiMoviePlay />,
    url: "/films",
    value: "ALL",
  },
  {
    title: "Сериалы",
    icon: <FaTv />,
    url: "/serials",
    value: "TV_SERIES",
  },
  {
    title: "Мультфильмы",
    icon: <GiMagicHat />,
    url: "/cartoon",
    value: "ALL",
  },
];

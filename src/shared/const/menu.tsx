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
    title: "Топ 100 фильмов",
    icon: <GiStarsStack />,
    url: '/popular/top100'
  },
  {
    title: "Топ 250 фильмов",
    icon: <WiStars />,
    url: '/popular/top250'
  },
  {
    title: "Вампиры",
    icon: <GiVampireCape />,
     url: '/vampire'
  },
  {
    title: "Комиксы",
    icon: <MdMenuBook />,
      url: '/comics'
  },
  {
    title: "Семейный",
    icon: <MdFamilyRestroom />,
     url: '/family'
  },
  {
    title: "Романтика",
    icon: <FaHeart />,
    url: '/romantic'
  },
  {
    title: "Зомби",
    icon: <GiShamblingZombie />,
      url: '/zombie'
  },
  {
    title: "Катастрофы",
    icon: <GiNuclearBomb />,
      url: '/catastrophe'
  },
  {
    title: "Популярные сериалы",
    icon: <BiCameraMovie />,
    url: '/popular/serials'
  },
];

export const SIDEBAR_MENU_BOTTOM = [
  {
    title: "Фильмы",
    icon: <BiMoviePlay />,
    url: '/films'
  },
  {
    title: "Сериалы",
    icon: <FaTv />,
     url: '/serials'
  },
  {
    title: "Мультфильмы",
    icon: <GiMagicHat />,
     url: '/cartoon'
  },
];

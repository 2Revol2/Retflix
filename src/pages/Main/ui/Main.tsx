import { movieStore } from "@/shared/lib/store/MovieStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { MovieCategoryEnum } from "@/shared/lib/store/MovieStore";
import { SIDEBAR_MENU_BOTTOM, SIDEBAR_MENU_TOP } from "@/shared/const/menu";
import s from "./Main.module.scss";
import { Carousel } from "@/features/Carousel";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const Main = observer(() => {
  const {
    popularMoviesData,
    bestMoviesData,
    cartoonsData,
    serialData,
    filmsData,
    getMoviesCollectionsAction,
    getFilmsAction,
  } = movieStore;

  const moviesCollectionsData = [
    {
      action: "getMoviesCollectionsAction",
      title: "Популярные фильмы",
      category: MovieCategoryEnum.Popular,
      data: popularMoviesData,
      menu: SIDEBAR_MENU_TOP[0],
    },
    {
      action: "getMoviesCollectionsAction",
      title: "Лучшие фильмы",
      category: MovieCategoryEnum.Best,
      data: bestMoviesData,
      menu: SIDEBAR_MENU_TOP[1],
    },
    {
      action: "getFilmsAction",
      title: "Фильмы",
      category: MovieCategoryEnum.Films,
      data: filmsData,
      menu: SIDEBAR_MENU_BOTTOM[0],
    },
    {
      action: "getFilmsAction",
      title: "Сериалы",
      category: MovieCategoryEnum.Serials,
      data: serialData,
      menu: SIDEBAR_MENU_BOTTOM[1],
    },
    {
      action: "getFilmsAction",
      title: "Мультфильмы",
      category: MovieCategoryEnum.Cartoons,
      data: cartoonsData,
      menu: SIDEBAR_MENU_BOTTOM[2],
    },
  ];

  useEffect(() => {
    moviesCollectionsData.map((item) => {
      if (item.action === "getMoviesCollectionsAction") {
        getMoviesCollectionsAction(item.category, item.menu.value, 1);
      } else {
        getFilmsAction(
          item.category,
          null,
          item.category === MovieCategoryEnum.Cartoons ? 18 : null,
          null,
          1,
          "NUM_VOTE",
          item.menu.value
        );
      }
    });
  }, []);

  return (
    <div className={s.mainPage}>
      {moviesCollectionsData.map((movie) =>
        movie.data?.state === "fulfilled" ? (
          <Carousel
            key={movie.title}
            title={movie.title}
            url={movie.menu.url}
            list={movie.data.value.items}
          />
        ) : (
          <Skeleton count={5} type="main" />
        )
      )}
    </div>
  );
});

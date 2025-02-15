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
      title: "Популярные фильмы",
      category: MovieCategoryEnum.Popular,
      data: popularMoviesData,
      menu: SIDEBAR_MENU_TOP[0],
    },
    {
      title: "Лучшие фильмы",
      category: MovieCategoryEnum.Best,
      data: bestMoviesData,
      menu: SIDEBAR_MENU_TOP[1],
    },
    {
      title: "Фильмы",
      category: MovieCategoryEnum.Films,
      data: filmsData,
      menu: SIDEBAR_MENU_BOTTOM[0],
    },
    {
      title: "Сериалы",
      category: MovieCategoryEnum.Serials,
      data: serialData,
      menu: SIDEBAR_MENU_BOTTOM[1],
    },
    {
      title: "Мультфильмы",
      category: MovieCategoryEnum.Cartoons,
      data: cartoonsData,
      menu: SIDEBAR_MENU_BOTTOM[2],
    },
  ];
  useEffect(() => {
    getMoviesCollectionsAction(
      MovieCategoryEnum.Popular,
      SIDEBAR_MENU_TOP[0].value,
      1
    );
    getMoviesCollectionsAction(
      MovieCategoryEnum.Best,
      SIDEBAR_MENU_TOP[1].value,
      1
    );

    getFilmsAction(
      MovieCategoryEnum.Cartoons,
      null,
      18,
      null,
      1,
      "NUM_VOTE",
      SIDEBAR_MENU_BOTTOM[2].value
    );

    getFilmsAction(
      MovieCategoryEnum.Serials,
      null,
      null,
      null,
      1,
      "NUM_VOTE",
      SIDEBAR_MENU_BOTTOM[1].value
    );
    getFilmsAction(
      MovieCategoryEnum.Films,
      null,
      null,
      null,
      1,
      "NUM_VOTE",
      SIDEBAR_MENU_BOTTOM[0].value
    );
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

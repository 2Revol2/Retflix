import { movieStore } from "@/shared/lib/store/MovieStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { MovieCategoryEnum } from "@/shared/lib/store/MovieStore";
import { SIDEBAR_MENU_TOP } from "@/shared/const/menu";
import s from "./Main.module.scss";
import { Carousel } from "@/features/Carousel";
export const Main = observer(() => {
  const { popularMoviesData, bestMoviesData, getMoviesCollectionsAction } =
    movieStore;
  const moviesData = [
    {
      category: MovieCategoryEnum.Popular,
      data: popularMoviesData,
      menu: SIDEBAR_MENU_TOP[0],
    },
    {
      category: MovieCategoryEnum.Best,
      data: bestMoviesData,
      menu: SIDEBAR_MENU_TOP[1],
    },
  ];

  useEffect(() => {
    moviesData.forEach((movie) => {
      getMoviesCollectionsAction(movie.category, movie.menu.value, 1);
    });
  }, []);

  return (
    <div className={s.mainPage}>
      {moviesData.map(
        (movie) =>
          movie.data?.state === "fulfilled" && (
            <Carousel
              title={movie.menu.title}
              url={movie.menu.url}
              list={movie.data.value.items}
            />
          )
      )}
    </div>
  );
});

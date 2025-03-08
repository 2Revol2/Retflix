import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { MovieCategoryEnum } from "@/shared/store/MoviesStore";
import { SIDEBAR_MENU_BOTTOM, SIDEBAR_MENU_TOP } from "@/shared/const/menu";
import s from "./Main.module.scss";
import { Carousel } from "@/widgets/Carousel";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { useStore } from "@/app/providers/StoreContext";

const Main = observer(() => {
  const { moviesStore } = useStore();

  const moviesCollectionsData = [
    {
      action: "getMoviesCollectionsAction",
      title: "Популярные фильмы",
      category: MovieCategoryEnum.Popular,
      data: moviesStore.popularMoviesData,
      menu: SIDEBAR_MENU_TOP[0],
    },
    {
      action: "getMoviesCollectionsAction",
      title: "Лучшие фильмы",
      category: MovieCategoryEnum.Best,
      data: moviesStore.bestMoviesData,
      menu: SIDEBAR_MENU_TOP[1],
    },
    {
      action: "getFilmsAction",
      title: "Фильмы",
      category: MovieCategoryEnum.Films,
      data: moviesStore.filmsData,
      menu: SIDEBAR_MENU_BOTTOM[0],
    },
    {
      action: "getFilmsAction",
      title: "Сериалы",
      category: MovieCategoryEnum.Serials,
      data: moviesStore.serialData,
      menu: SIDEBAR_MENU_BOTTOM[1],
    },
    {
      action: "getFilmsAction",
      title: "Мультфильмы",
      category: MovieCategoryEnum.Cartoons,
      data: moviesStore.cartoonsData,
      menu: SIDEBAR_MENU_BOTTOM[2],
    },
  ];

  useEffect(() => {
    moviesCollectionsData.map((item) => {
      if (item.action === "getMoviesCollectionsAction") {
        moviesStore.getMoviesCollectionsAction(
          item.category,
          item.menu.value,
          1
        );
      } else {
        moviesStore.getFilmsAction(
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
export default Main;

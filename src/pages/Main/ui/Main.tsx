import { movieStore } from "@/shared/lib/store/MovieStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { MovieCategoryEnum } from "@/shared/lib/store/MovieStore";
import { SIDEBAR_MENU_TOP } from "@/shared/const/menu";

import { Link } from "react-router-dom";
import s from "./Main.module.scss";
import Slider from "react-slick";

export const Main = observer(() => {
  const { popularMoviesData, getMoviesCollectionsAction } =
    movieStore;
  useEffect(() => {
    getMoviesCollectionsAction(
      MovieCategoryEnum.Popular,
      SIDEBAR_MENU_TOP[0].value,
      1
    );
  }, []);

  // useEffect(() => {
  //   getMoviesCollectionsAction(
  //     MovieCategoryEnum.Best,
  //     SIDEBAR_MENU_TOP[1].value,
  //     1
  //   );
  // }, []);

  return (
    <div className={s.mainPage}>
      <div className={s.carouselWrapper}>
        <div className={s.title}>
          <Link to="/popular">{SIDEBAR_MENU_TOP[0].title}</Link>
        </div>

        <Slider
          autoplaySpeed={4000}
          autoplay={true}
          dots={false}
          infinite
          slidesToScroll={1}
          centerMode={true}
          centerPadding="20px"
          className={s.carousel}
          slidesToShow={6}
          responsive={[
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                autoplay: false,
              },
            },
          ]}
        >
          {popularMoviesData?.state === "fulfilled" &&
            popularMoviesData.value.items.map((item) => (
              <div className={s.imageWrapper} key={item.kinopoiskId}>
                <Link to={`/movie/${item.kinopoiskId}`}>
                  <img
                    className={s.image}
                    src={item.posterUrl}
                    alt={item.nameRu}
                  />
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
});

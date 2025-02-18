import { Movie } from "@/shared/api/moviesApi/types";
import Slider from "react-slick";
import s from "./Carousel.module.scss";
import { Link } from "react-router-dom";
type CarouselProps = {
  title: string;
  url: string;
  list: Movie[];
};

export const Carousel = ({ title, url, list }: CarouselProps) => {
  return (
    <div className={s.carouselWrapper}>
      <div className={s.title}>
        <Link to={url}>{title}</Link>
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
              centerMode: false,
              centerPadding: "0px",
            },
          },
        ]}
      >
        {list.map((item) => (
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
  );
};

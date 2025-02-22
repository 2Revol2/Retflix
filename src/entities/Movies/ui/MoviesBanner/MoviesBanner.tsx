import { Movie } from "@/shared/types/MoviesApi";
import s from "./MoviesBanner.module.scss";
import { Link } from "react-router-dom";
import { Rate, Tooltip } from "antd";
import { useMobile } from "@/shared/lib/hooks/useMobile";

type MoviesBannerProps = {
  movie: Movie;
};

export const MoviesBanner = ({ movie }: MoviesBannerProps) => {
  const isMobile = useMobile(500);
  return (
    <div className={s.cardWrapper}>
      <Link to={`/movie/${movie.kinopoiskId}`}>
        <div className={s.movieInfo}>
          <img className={s.image} src={movie.posterUrl} alt={movie.nameRu} />
          <h3 className={s.name}>{movie.nameRu}</h3>
        </div>
      </Link>
      {isMobile ? (
        <div className={s.rate}>
          {movie.ratingKinopoisk ? movie.ratingKinopoisk : "Нет оценки"}
        </div>
      ) : movie.ratingKinopoisk ? (
        <Tooltip placement="top" title={movie.ratingKinopoisk}>
          <span>
            <Rate disabled allowHalf value={(movie.ratingKinopoisk || 0) / 2} />
          </span>
        </Tooltip>
      ) : (
        <div className={s.rate}>Нет оценки</div>
      )}
    </div>
  );
};

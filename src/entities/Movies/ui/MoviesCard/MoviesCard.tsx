import s from "./MoviesCard.module.scss";
import { SequelsAndPrequels } from "@/shared/api/movieDetailApi/types";
import { Link } from "react-router-dom";
type MoviesCardProps = {
  movie: SequelsAndPrequels;
};
export const MoviesCard = ({ movie }: MoviesCardProps) => {
  return (
    <Link to={`/movie/${movie.filmId}`}>
      <div className={s.movieCard}>
        <img src={movie.posterUrl} alt={movie.nameRu} />
        <h6>{movie.nameRu ? movie.nameRu : movie.nameEn}</h6>
      </div>
    </Link>
  );
};

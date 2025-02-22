import { Movie } from "@/shared/types/MoviesApi";
import s from "./MoviesList.module.scss";
import { MoviesBanner } from "@/entities/Movies";

type MoviesListProps = {
  movies: Movie[];
};
export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <div>
      <div className={s.list}>
        {movies.map((movie) => (
          <MoviesBanner key={movie.kinopoiskId} movie={movie} />
        ))}
      </div>
    </div>
  );
};

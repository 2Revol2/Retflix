import { Movie } from "@/shared/api/moviesApi/types";
import s from "./MoviesList.module.scss";
import { MoviesBanner } from "@/entities/Movies";
import { JSX } from "react";
type MoviesListProps = {
  movies: Movie[];
  movieType:
    | { title: string; icon: JSX.Element; url: string; value: string }
    | undefined;
};
export const MoviesList = ({ movies, movieType }: MoviesListProps) => {
  return (
    <div>
      <h2  className={s.moviesCategory}>{movieType?.title}</h2>
      <div className={s.list}>
        {movies.map((movie) => (
          <MoviesBanner key={movie.kinopoiskId} movie={movie} />
        ))}
      </div>
    </div>
  );
};

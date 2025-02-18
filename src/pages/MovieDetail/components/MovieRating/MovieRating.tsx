import { Flex } from "antd";
import s from "./MovieRating.module.scss";
type MovieRatingProps = {
  type: "kinopoisk" | "imdb";
  label: string;
  rating: number;
};
export const MovieRating = ({ type, label, rating }: MovieRatingProps) => {
  return (
    <Flex gap={10} align="center">
      <h5 className={`${type === "kinopoisk" ? s.kinopoisk : s.imdb}`}>
        {label}
      </h5>
      <p className={s.movieInfo}>{rating}</p>
    </Flex>
  );
};

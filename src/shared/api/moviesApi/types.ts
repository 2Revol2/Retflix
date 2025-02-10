export type Movie = {
  countries: { country: string }[];
  description: string;
  genres: { genre: string }[];
  posterUrl: string;
  nameRu: string;
  nameEn: string | null;
  year: number;
  ratingImdb: number | undefined;
  ratingKinopoisk: number | undefined;
  kinopoiskId: number;
};
export type MoviesResponse = {
  total: number;
  items: Movie[];
  totalPages: number;
};

export type Movies = {
  countries: { country: string }[];
  description: string;
  genres: { genre: string }[];
  posterUrl: string;
  nameRu: string;
  year: number;
  ratingImdb: string | null;
  ratingKinopoisk: string | null;
};
export type MoviesResponse = {
  total: number;
  items: Movies[];
  totalPages: number;
};

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
  type: string;
};
export type MoviesResponse = {
  total: number;
  items: Movie[];
  totalPages: number;
};

export type genresAndCountriesResponce = {
  genres: {
    id: number;
    genre: string;
  }[];
  countries: {
    id: number;
    country: string;
  }[];
};

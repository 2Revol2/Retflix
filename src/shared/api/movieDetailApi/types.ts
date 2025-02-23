export type MovieDetail = {
  countries: { country: string }[];
  description: string;
  filmLength: number;
  genres: { genre: string }[];
  kinopoiskId: number;
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  shortDescription: string;
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
};

export type SequelsAndPrequels = {
  filmId: number;
  nameEn: string;
  nameRu: string;
  posterUrl: string;
};
export type Staff = {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string | null;
  posterUrl: string;
  professionText: string;
  professionKey: string;
};

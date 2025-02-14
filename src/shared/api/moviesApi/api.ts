import { baseInstance } from "../base";
import { genresAndCountriesResponce, MoviesResponse } from "./types";

export const getMoviesCollections = async (
  type: string | undefined,
  page: number
) =>
  (
    await baseInstance.get<MoviesResponse>("v2.2/films/collections", {
      params: {
        type,
        page,
      },
    })
  ).data;

export const getFilms = async (
  countries: number | null,
  genres: number | null,
  order: string = "NUM_VOTE",
  type?: string,
  page: number = 1
) =>
  (
    await baseInstance.get<MoviesResponse>("v2.2/films", {
      params: {
        countries,
        genres,
        order,
        type,
        page,
      },
    })
  ).data;

export const getFilters = async () =>
  (await baseInstance.get<genresAndCountriesResponce>("v2.2/films/filters"))
    .data;

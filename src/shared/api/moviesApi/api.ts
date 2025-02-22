import { baseInstance } from "../base";
import {
  genresAndCountriesResponce,
  MoviesResponse,
} from "../../types/MoviesApi";

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
  year: number | null,
  page: number = 1,
  type?: string
) =>
  (
    await baseInstance.get<MoviesResponse>("v2.2/films", {
      params: {
        countries,
        genres,
        order,
        type,
        page,
        yearFrom: year,
        yearTo: year,
      },
    })
  ).data;

export const getFilters = async () =>
  (await baseInstance.get<genresAndCountriesResponce>("v2.2/films/filters"))
    .data;

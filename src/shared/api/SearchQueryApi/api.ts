import { MoviesResponse } from "@/shared/types/MoviesApi";
import { baseInstance } from "../base";

export const getSearchQuery = async (
  countries: number | null,
  genres: number | null,
  year: number | null,
  page: number,
  keyword: string,
  order?: string,
  type?: string
) =>
  (
    await baseInstance.get<MoviesResponse>("v2.2/films", {
      params: {
        countries,
        genres,
        year,
        page,
        order,
        type,
        keyword,
      },
    })
  ).data;

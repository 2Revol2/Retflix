import { baseInstance } from "../base";
import { MoviesResponse } from "./types";

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

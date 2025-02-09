import { baseInstance } from "../base";
import { MoviesResponse } from "./types";

export const getMovies = async () =>
  (await baseInstance.get<MoviesResponse>("v2.2/films/collections")).data;

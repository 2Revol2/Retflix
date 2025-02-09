import { getMovies } from "@/shared/api/moviesApi/api";
import { MoviesResponse } from "@/shared/api/moviesApi/types";
import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

class MainStorePage {
  constructor() {
    makeAutoObservable(this);
  }
  moviesData?: IPromiseBasedObservable<MoviesResponse>;

  getMoviesAction = async () => {
    try {
      this.moviesData = fromPromise(getMovies());
    } catch (error) {
      console.log(error);
    }
  };
}
export const mainStorePage = new MainStorePage();

import { getMoviesCollections } from "@/shared/api/moviesApi/api";
import { MoviesResponse } from "@/shared/api/moviesApi/types";
import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

class MovieCategoryStore {
  constructor() {
    makeAutoObservable(this);
  }
  movieCategoryData?: IPromiseBasedObservable<MoviesResponse>;

  getMoviesCollectionsAction = async (
    type: string | undefined,
    page: number
  ) => {
    try {
      this.movieCategoryData = fromPromise(getMoviesCollections(type, page));
    } catch (error) {
      console.log(error);
    }
  };
}
export const movieCategoryStore = new MovieCategoryStore();

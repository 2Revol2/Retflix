import { getMoviesCollections } from "@/shared/api/moviesApi/api";
import { MoviesResponse } from "@/shared/api/moviesApi/types";
import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

export enum MovieCategoryEnum {
  General = "movieCategoryData",
  Popular = "popularMoviesData",
  Best = "bestMoviesData",
}

class MovieStore {
  constructor() {
    makeAutoObservable(this);
  }
  movieCategoryData?: IPromiseBasedObservable<MoviesResponse>;
  popularMoviesData?: IPromiseBasedObservable<MoviesResponse>;
  bestMoviesData?: IPromiseBasedObservable<MoviesResponse>;
  getMoviesCollectionsAction = async (
    category: MovieCategoryEnum,
    type: string | undefined,
    page: number
  ) => {
    try {
      this[category] = fromPromise(getMoviesCollections(type, page));
    } catch (error) {
      console.log(error);
    }
  };
}
export const movieStore = new MovieStore();

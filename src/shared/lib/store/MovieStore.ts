import { getFilms, getMoviesCollections } from "@/shared/api/moviesApi/api";
import { MoviesResponse } from "@/shared/api/moviesApi/types";
import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

export enum MovieCategoryEnum {
  General = "movieCategoryData",
  Popular = "popularMoviesData",
  Best = "bestMoviesData",
  Serials = "serialData",
  Cartoons = "cartoonsData",
  Films = "filmsData",
}

class MovieStore {
  constructor() {
    makeAutoObservable(this);
  }
  // colletions
  movieCategoryData?: IPromiseBasedObservable<MoviesResponse>;
  popularMoviesData?: IPromiseBasedObservable<MoviesResponse>;
  bestMoviesData?: IPromiseBasedObservable<MoviesResponse>;

  // films
  serialData?: IPromiseBasedObservable<MoviesResponse>;
  cartoonsData?: IPromiseBasedObservable<MoviesResponse>;
  filmsData?: IPromiseBasedObservable<MoviesResponse>;

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

  getFilmsAction = async (
    category: MovieCategoryEnum,
    countries?: number,
    genres?: number,
    order?: string,
    type?: string,
    page?: number
  ) => {
    try {
      this[category] = fromPromise(
        getFilms(countries, genres, order, type, page)
      );
    } catch (error) {
      console.log(error);
    }
  };
}
export const movieStore = new MovieStore();

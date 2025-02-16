import {
  getFilms,
  getFilters,
  getMoviesCollections,
} from "@/shared/api/moviesApi/api";
import {
  genresAndCountriesResponce,
  MoviesResponse,
} from "@/shared/api/moviesApi/types";
import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

export enum MovieCategoryEnum {
  General = "movieCategoryData",
  Popular = "popularMoviesData",
  Best = "bestMoviesData",
  Serials = "serialData",
  Cartoons = "cartoonsData",
  Films = "filmsData",
  Movies = "moviesData",
}

class MoviesStore {
  constructor() {
    makeAutoObservable(this);
  }
  // colletions
  movieCategoryData?: IPromiseBasedObservable<MoviesResponse>;
  popularMoviesData?: IPromiseBasedObservable<MoviesResponse>;
  bestMoviesData?: IPromiseBasedObservable<MoviesResponse>;

  // films
  moviesData?: IPromiseBasedObservable<MoviesResponse>;
  serialData?: IPromiseBasedObservable<MoviesResponse>;
  cartoonsData?: IPromiseBasedObservable<MoviesResponse>;
  filmsData?: IPromiseBasedObservable<MoviesResponse>;

  // filters
  filtersData?: IPromiseBasedObservable<genresAndCountriesResponce>;

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
    countries: number | null,
    genres: number | null,
    year: number | null,
    page: number,
    order?: string,
    type?: string
  ) => {
    try {
      this[category] = fromPromise(
        getFilms(countries, genres, order, year, page, type)
      );
    } catch (error) {
      console.log(error);
    }
  };

  getFiltersAction = async () => {
    try {
      this.filtersData = fromPromise(getFilters());
    } catch (error) {
      console.log(error);
    }
  };
}
export const moviesStore = new MoviesStore();

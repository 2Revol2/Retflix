import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import {
  getFilm,
  getSequelsAndPrequels,
  getStaff,
} from "../api/movieDetailApi/api";
import {
  MovieDetail,
  SequelsAndPrequels,
  Staff,
} from "../api/movieDetailApi/types";

class MovieDetailStore {
  constructor() {
    makeAutoObservable(this);
  }
  filmData?: IPromiseBasedObservable<MovieDetail>;
  sequelsAndPrequelsData?: IPromiseBasedObservable<SequelsAndPrequels[]>;
  staffData?: IPromiseBasedObservable<Staff[]>;

  getFilmAction = async (id: string) => {
    try {
      this.filmData = fromPromise(getFilm(id));
    } catch (error) {
      console.log(error);
    }
  };

  getSequelsAndPrequelsAction = async (id: string) => {
    try {
      this.sequelsAndPrequelsData = fromPromise(getSequelsAndPrequels(id));
    } catch (error) {
      console.log(error);
    }
  };

  getStaffAction = async (id: string) => {
    try {
      this.staffData = fromPromise(getStaff(id));
    } catch (error) {
      console.log(error);
    }
  };
}
export const movieDetailStore = new MovieDetailStore();

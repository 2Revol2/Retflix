import { MovieDetailStore } from "./movieDetailStore"
import { MoviesStore } from "./MoviesStore"

export class RootStore {
    moviesStore = new MoviesStore()
    movieDetailStore = new MovieDetailStore()
  }
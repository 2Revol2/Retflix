import { ActorDetail } from "@/pages/ActorDetail";
import { MovieDetail } from "@/pages/MovieDetail";
import { MovieCategory } from "@/pages/MovieCategory";
import { MoviesMain } from "@/pages/MoviesMain";
import { Main } from "@/pages/Main";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ACTOR_DETAILS = "actor_details",
  MOVIE_DETAILS = "movie_details",
  POPULAR_FILMS = "popular_films",
  TOP_250 = "top_250",
  VAMPIRE = "vampire",
  COMICS = "comics",
  FAMILY = "family",
  ROMANTIC = "romantic",
  ZOMBIE = "zombie",
  CATASTROPHE = "catastrophe",
  POPULAR_SERIALS = "poppular_serials",
  FILMS = "films",
  SERIALS = "serials",
  CARTOONS = "cartoons",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ACTOR_DETAILS]: "/actor/:id",
  [AppRoutes.MOVIE_DETAILS]: "/movie/:id",
  [AppRoutes.POPULAR_FILMS]: "/popular/films",
  [AppRoutes.TOP_250]: "/top250",
  [AppRoutes.VAMPIRE]: "/vampire",
  [AppRoutes.COMICS]: "/comics",
  [AppRoutes.FAMILY]: "/family",
  [AppRoutes.ROMANTIC]: "/romantic",
  [AppRoutes.ZOMBIE]: "/zombie",
  [AppRoutes.CATASTROPHE]: "/catastrophe",
  [AppRoutes.POPULAR_SERIALS]: "/poppular/serials",
  [AppRoutes.FILMS]: "/films",
  [AppRoutes.SERIALS]: "/serials",
  [AppRoutes.CARTOONS]: "/cartoons",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { 
    path: RoutePath.main, 
    element: <Main /> 
  },
  [AppRoutes.ACTOR_DETAILS]: {
    path: RoutePath.actor_details,
    element: <ActorDetail />,
  },
  [AppRoutes.MOVIE_DETAILS]: {
    path: RoutePath.movie_details,
    element: <MovieDetail />,
  },
  [AppRoutes.POPULAR_FILMS]: {
    path: RoutePath.popular_films,
    element: <MovieCategory />,
  },
  [AppRoutes.TOP_250]: {
    path: RoutePath.top_250,
    element: <MovieCategory />,
  },
  [AppRoutes.VAMPIRE]: {
    path: RoutePath.vampire,
    element: <MovieCategory />,
  },
  [AppRoutes.COMICS]: {
    path: RoutePath.comics,
    element: <MovieCategory />,
  },
  [AppRoutes.FAMILY]: {
    path: RoutePath.family,
    element: <MovieCategory />,
  },
  [AppRoutes.ROMANTIC]: {
    path: RoutePath.romantic,
    element: <MovieCategory />,
  },
  [AppRoutes.ZOMBIE]: {
    path: RoutePath.zombie,
    element: <MovieCategory />,
  },
  [AppRoutes.CATASTROPHE]: {
    path: RoutePath.catastrophe,
    element: <MovieCategory />,
  },
  [AppRoutes.POPULAR_SERIALS]: {
    path: RoutePath.poppular_serials,
    element: <MovieCategory />,
  },
  [AppRoutes.FILMS]: {
    path: RoutePath.films,
    element: <MoviesMain />,
  },
  [AppRoutes.SERIALS]: {
    path: RoutePath.serials,
    element: <MoviesMain />,
  },
  [AppRoutes.CARTOONS]: {
    path: RoutePath.cartoons,
    element: <MoviesMain />,
  },
};

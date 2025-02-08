import { ActorDetail } from "@/pages/ActorDetail";
import { MovieDetail } from "@/pages/MovieDetail";
import { Main } from "@/pages/Main";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ACTOR_DETAILS = "actor_details",
  MOVIE_DETAILS = "movie_details",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ACTOR_DETAILS]: "/actor/:id",
  [AppRoutes.MOVIE_DETAILS]: "/movie/:id",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />,
  },
  [AppRoutes.ACTOR_DETAILS]: {
    path: RoutePath.actor_details,
    element: <ActorDetail />,
  },
  [AppRoutes.MOVIE_DETAILS]: {
    path: RoutePath.movie_details,
    element: <MovieDetail />,
  },
};

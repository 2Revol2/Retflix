import { useEffect, useMemo, useState } from "react";
import { MovieCategoryEnum, moviesStore } from "../store/MoviesStore";
import { SIDEBAR_MENU_BOTTOM } from "@/shared/const/menu";
import { useLocation } from "react-router-dom";

export const useMoviesFilters = () => {
  const { getFilmsAction } = moviesStore;
  const location = useLocation();
  const [filters, setFilters] = useState<{
    genre: null | number;
    country: null | number;
    order: string;
    year: number | null;
    page: number;
  }>({
    genre: null,
    country: null,
    order: "NUM_VOTE",
    year: null,
    page: 1,
  });

  const movieType = useMemo(() => {
    return SIDEBAR_MENU_BOTTOM.find((item) => item.url === location.pathname);
  }, [location.pathname]);

  const cartoonsId = movieType?.url === "/cartoon" ? 18 : filters.genre;

  useEffect(() => {
    getFilmsAction(
      MovieCategoryEnum.Movies,
      filters.country,
      cartoonsId,
      filters.year,
      filters.page,
      filters.order,
      movieType?.value
    );
  }, [
    location.pathname,
    movieType?.value,
    filters.page,
    filters.genre,
    filters.country,
    filters.order,
    filters.year,
  ]);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      genre: null,
      country: null,
      year: null,
      page: 1,
    }));
  }, [location]);

  return { filters, setFilters, movieType };
};

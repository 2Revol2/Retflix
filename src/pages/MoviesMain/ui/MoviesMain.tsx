import { observer } from "mobx-react-lite";
import { movieStore } from "../../../shared/lib/store/MovieStore";
import { useEffect, useState } from "react";
import { SIDEBAR_MENU_BOTTOM } from "@/shared/const/menu";
import { useLocation } from "react-router-dom";
import { Pagination, PaginationProps } from "antd";
import { MoviesList } from "@/widgets/MoviesList/MoviesList";
import s from "./MoviesMain.module.scss";
import { MovieCategoryEnum } from "../../../shared/lib/store/MovieStore";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Filter } from "@/features/Filter";

export const MoviesMain = observer(() => {
  const { moviesData, filtersData, getFilmsAction, getFiltersAction } =
    movieStore;
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<{
    genre: null | number;
    country: null | number;
    order: string;
  }>({
    genre: null,
    country: null,
    order: "NUM_VOTE",
  });

  const orderList = [
    { id: "RATING", value: "За рейтингом" },
    { id: "NUM_VOTE", value: "По голосам" },
  ];

  const category =
    filtersData?.state === "fulfilled"
      ? filtersData.value
      : { genres: [], countries: [] };

  const movieType = SIDEBAR_MENU_BOTTOM.find(
    (item) => item.url === location.pathname
  );

  useEffect(() => {
    getFiltersAction();
  }, []);

  const cartoonsId = movieType?.url === "/cartoon" ? 18 : filters.genre;

  useEffect(() => {
    getFilmsAction(
      MovieCategoryEnum.Movies,
      filters.country,
      cartoonsId,
      filters.order,
      movieType?.value,
      page
    );
  }, [
    location.pathname,
    movieType?.value,
    page,
    filters.genre,
    filters.country,
    filters.order,
  ]);

  useEffect(() => {
    setPage(1);
    setFilters((prev) => ({ ...prev, genre: null, country: null }));
  }, [location]);

  const paginationHandler: PaginationProps["onChange"] = (page) => {
    setPage(page);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {moviesData?.state === "pending" && (
          <Skeleton count={20} type="category" />
        )}

        {moviesData?.state === "fulfilled" &&
          moviesData.value.items.length === 0 && (
            <p style={{ fontSize: "32px", color: "var(--text)" }}>
              Что-то пошло не так. Проблема в API
            </p>
          )}
      </div>

      <div className={s.movieWrapper}>
        {filtersData?.state === "fulfilled" && (
          <Filter
            orderList={orderList}
            categories={filters}
            genresAndCountries={category}
            setFilters={setFilters}
          />
        )}
        {moviesData?.state === "fulfilled" &&
          moviesData.value.items.length > 0 && (
            <MoviesList movies={moviesData.value.items} movieType={movieType} />
          )}
        <Pagination
          showQuickJumper={false}
          showSizeChanger={false}
          className={s.pagination}
          total={moviesData?.state === "fulfilled" ? moviesData.value.total : 0}
          hideOnSinglePage={true}
          current={page}
          pageSize={20}
          responsive
          onChange={paginationHandler}
        />
      </div>
    </>
  );
});

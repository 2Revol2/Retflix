import { observer } from "mobx-react-lite";
import { movieStore } from "../../../shared/lib/store/MovieStore";
import { useEffect } from "react";
import { Pagination, PaginationProps } from "antd";
import { MoviesList } from "@/widgets/MoviesList/MoviesList";
import s from "./MoviesMain.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Filter } from "@/features/Filter";
import { Title } from "@/shared/ui/Title/Title";
import { ORDER_LIST, YEAR_LIST } from "@/shared/const/constants";
import { useMoviesFilters } from "@/shared/lib/hooks/useMoviesFilters";
export const MoviesMain = observer(() => {
  const { moviesData, filtersData, getFiltersAction } = movieStore;
  const { filters, setFilters, movieType } = useMoviesFilters();

  const category =
    filtersData?.state === "fulfilled"
      ? filtersData.value
      : { genres: [], countries: [] };

  useEffect(() => {
    getFiltersAction();
  }, []);

  const paginationHandler: PaginationProps["onChange"] = (page) => {
    setFilters((prev) => ({ ...prev, page: page }));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {moviesData?.state === "fulfilled" &&
          moviesData.value.items.length === 0 && (
            <p style={{ fontSize: "32px", color: "var(--text)" }}>
              Что-то пошло не так. Проблема в API
            </p>
          )}
      </div>

      <div className={s.movieWrapper}>
        <Title>{movieType?.title}</Title>
        {filtersData?.state === "fulfilled" && (
          <Filter
            yearList={YEAR_LIST}
            orderList={ORDER_LIST}
            filters={filters}
            genresAndCountries={category}
            setFilters={setFilters}
          />
        )}

        {moviesData?.state === "pending" && (
          <div className={s.skeltonWrapper}>
            <Skeleton count={20} type="category" />
          </div>
        )}

        {moviesData?.state === "fulfilled" &&
          moviesData.value.items.length > 0 && (
            <MoviesList movies={moviesData.value.items} />
          )}
        <Pagination
          showQuickJumper={false}
          showSizeChanger={false}
          className={s.pagination}
          total={moviesData?.state === "fulfilled" ? moviesData.value.total : 0}
          hideOnSinglePage={true}
          current={filters.page}
          pageSize={20}
          responsive
          onChange={paginationHandler}
        />
      </div>
    </>
  );
});

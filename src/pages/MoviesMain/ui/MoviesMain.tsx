import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Pagination, PaginationProps } from "antd";
import { MoviesList } from "@/widgets/MoviesList/MoviesList";
import s from "./MoviesMain.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Filters } from "@/widgets/Filters";
import { Title } from "@/shared/ui/Title/Title";
import { ORDER_LIST, YEAR_LIST } from "@/shared/const/constants";
import { useMoviesFilters } from "@/shared/lib/hooks/useMoviesFilters";
import { useStore } from "@/app/providers/StoreContext";
const MoviesMain = observer(() => {
  const { moviesStore } = useStore();
  const { filters, setFilters, movieType } = useMoviesFilters();

  const category =
  moviesStore.filtersData?.state === "fulfilled"
      ? moviesStore.filtersData.value
      : { genres: [], countries: [] };

  useEffect(() => {
    moviesStore. getFiltersAction();
  }, []);

  const paginationHandler: PaginationProps["onChange"] = (page) => {
    setFilters((prev) => ({ ...prev, page: page }));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {moviesStore.moviesData?.state === "fulfilled" &&
          moviesStore.moviesData.value.items.length === 0 && (
            <p style={{ fontSize: "32px", color: "var(--text)" }}>
              Что-то пошло не так. Проблема в API
            </p>
          )}
      </div>

      <div className={s.movieWrapper}>
        <Title>{movieType?.title}</Title>
        {moviesStore.filtersData?.state === "fulfilled" && (
          <Filters
            yearList={YEAR_LIST}
            orderList={ORDER_LIST}
            filters={filters}
            genresAndCountries={category}
            setFilters={setFilters}
          />
        )}

        {moviesStore.moviesData?.state === "pending" && (
          <div className={s.skeltonWrapper}>
            <Skeleton count={20} type="category" />
          </div>
        )}

        {moviesStore.moviesData?.state === "fulfilled" &&
          moviesStore.moviesData.value.items.length > 0 && (
            <MoviesList movies={moviesStore.moviesData.value.items} />
          )}
        <Pagination
          showQuickJumper={false}
          showSizeChanger={false}
          className={s.pagination}
          total={moviesStore.moviesData?.state === "fulfilled" ? moviesStore.moviesData.value.total : 0}
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
export default MoviesMain;

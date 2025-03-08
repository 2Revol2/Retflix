import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { SIDEBAR_MENU_TOP } from "@/shared/const/menu";
import { useLocation } from "react-router-dom";
import { Pagination, PaginationProps } from "antd";
import { MoviesList } from "@/widgets/MoviesList/MoviesList";
import s from "./MovieCategory.module.scss";
import { MovieCategoryEnum } from "../../../shared/store/MoviesStore";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Title } from "@/shared/ui/Title/Title";
import { useStore } from "@/app/providers/StoreContext";
const MovieCategory = observer(() => {
    const {moviesStore} = useStore()
  const [page, setPage] = useState(1);
  const { movieCategoryData, getMoviesCollectionsAction } = moviesStore;
  const location = useLocation();
  const movieType = SIDEBAR_MENU_TOP.find(
    (item) => item.url === location.pathname
  );

  useEffect(() => {
    getMoviesCollectionsAction(
      MovieCategoryEnum.General,
      movieType?.value,
      page
    );
  }, [location.pathname, movieType?.value, page]);

  useEffect(() => {
    setPage(1);
  }, [location]);

  const paginationHandler: PaginationProps["onChange"] = (page) => {
    setPage(page);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {movieCategoryData?.state === "pending" && (
          <Skeleton count={20} type="category" />
        )}

        {movieCategoryData?.state === "fulfilled" &&
          movieCategoryData.value.items.length === 0 && (
            <p style={{ fontSize: "32px", color: "var(--text)" }}>
              Что-то пошло не так. Проблема в API
            </p>
          )}
      </div>

      <div className={s.movieWrapper}>
        <Title>{movieType?.title}</Title>
        {movieCategoryData?.state === "fulfilled" &&
          movieCategoryData.value.items.length > 0 && (
            <MoviesList movies={movieCategoryData.value.items} />
          )}
        <Pagination
          showQuickJumper={false}
          showSizeChanger={false}
          className={s.pagination}
          total={
            movieCategoryData?.state === "fulfilled"
              ? movieCategoryData.value.total
              : 0
          }
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
export default MovieCategory;

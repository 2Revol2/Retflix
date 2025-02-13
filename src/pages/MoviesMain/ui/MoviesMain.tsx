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
export const MoviesMain = observer(() => {
  const [page, setPage] = useState(1);
  const { moviesData, getFilmsAction } = movieStore;
  const location = useLocation();
  
  const movieType = SIDEBAR_MENU_BOTTOM.find(
    (item) => item.url === location.pathname
  );
  const cartoonsId = movieType?.url === '/cartoon' ? 18 : undefined;
  useEffect(() => {
    getFilmsAction(
      MovieCategoryEnum.Movies,
      undefined,
      cartoonsId,
      "NUM_VOTE",
      movieType?.value,
      1
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
        {moviesData?.state === "fulfilled" &&
          moviesData.value.items.length > 0 && (
            <MoviesList
              movies={moviesData.value.items}
              movieType={movieType}
            />
          )}
        <Pagination
          showQuickJumper={false}
          showSizeChanger={false}
          className={s.pagination}
          total={
            moviesData?.state === "fulfilled"
              ? moviesData.value.total
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

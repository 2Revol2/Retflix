import { observer } from "mobx-react-lite";
import { movieCategoryStore } from "../store/MovieCategoryStore";
import { useEffect, useState } from "react";
import { SIDEBAR_MENU_TOP } from "@/shared/const/menu";
import { useLocation } from "react-router-dom";
import { Pagination, PaginationProps, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { MoviesList } from "@/widgets/MoviesList/MoviesList";
import s from "./MovieCategory.module.scss";
export const MovieCategory = observer(() => {
  const [page, setPage] = useState(1);
  const { movieCategoryData, getMoviesCollectionsAction } = movieCategoryStore;
  const location = useLocation();
  const movieType = SIDEBAR_MENU_TOP.find(
    (item) => item.url === location.pathname
  );
  useEffect(() => {
    getMoviesCollectionsAction(movieType?.value, page);
  }, [location.pathname, movieType?.value, page]);

  const paginationHandler: PaginationProps["onChange"] = (page) => {
    setPage(page);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {movieCategoryData?.state === "pending" && (
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 48, color: "var(--logo)" }}
                spin
              />
            }
          />
        )}

        {movieCategoryData?.state === "fulfilled" &&
          movieCategoryData.value.items.length === 0 && (
            <p style={{ fontSize: "32px", color: "var(--text)" }}>
              Что-то пошло не так. Проблема в API
            </p>
          )}
      </div>

      <div className={s.movieWrapper}>
        {movieCategoryData?.state === "fulfilled" &&
          movieCategoryData.value.items.length > 0 && (
            <MoviesList
              movies={movieCategoryData.value.items}
              movieType={movieType}
            />
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

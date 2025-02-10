import { observer } from "mobx-react-lite";
import { movieCategoryStore } from "../store/MovieCategoryStore";
import { useEffect, useState } from "react";
import { SIDEBAR_MENU_TOP } from "@/shared/const/menu";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { MoviesList } from "@/widgets/MoviesList/MoviesList";

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
  console.log(setPage);

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

      <div>
        {movieCategoryData?.state === "fulfilled" &&
          movieCategoryData.value.items.length > 0 && (
            <MoviesList
              movies={movieCategoryData.value.items}
              movieType={movieType}
            />
          )}
      </div>
    </>
  );
});

import { observer } from "mobx-react-lite";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Col, Flex, Row, Spin } from "antd";
import s from "./MovieDetail.module.scss";
import { MovieInfoBlock } from "@/widgets/MovieInfoBlock";
import { MoviesCard } from "@/entities/Movies";
import { VideoPlayer } from "@/widgets/VideoPlayer";
import { LoadingOutlined } from "@ant-design/icons";
import { useStore } from "@/app/providers/StoreContext";
const MovieDetail = observer(() => {
  const { id } = useParams();
  const location = useLocation();
  const {movieDetailStore} = useStore()


  useEffect(() => {
    if (id) {
      movieDetailStore.getFilmAction(id);
      movieDetailStore.getSequelsAndPrequelsAction(id);
      movieDetailStore.getStaffAction(id);
    }
  }, [id, location.pathname]);

  const sequelsAndPrequelsDataResponse =
  movieDetailStore.sequelsAndPrequelsData?.state === "fulfilled"
      ? movieDetailStore.sequelsAndPrequelsData.value
      : [];

  return (
    <div className={s.movieWrapper}>
      {movieDetailStore.filmData?.state === "pending" &&
        movieDetailStore.staffData?.state === "pending" &&
        movieDetailStore.sequelsAndPrequelsData?.state === "pending" && (
          <Flex justify="center" align="center">
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
            />
          </Flex>
        )}
      {movieDetailStore.filmData?.state === "fulfilled" && (
        <Row>
          <Col xl={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <h2 className={s.title}>{movieDetailStore.filmData.value.nameRu}</h2>
            <Row gutter={[10, 10]} justify={"center"}>
              <Col xl={{ span: 5 }} sm={{ span: 10 }} xs={{ span: 24 }}>
                <img
                  className={s.image}
                  src={movieDetailStore.filmData.value.posterUrl}
                  alt={movieDetailStore.filmData.value.nameRu}
                />
              </Col>
              <Col xl={{ span: 19 }} sm={{ span: 14 }} xs={{ span: 24 }}>
                <Row>
                  <MovieInfoBlock
                    movieData={movieDetailStore.filmData.value}
                    staffData={
                      movieDetailStore.staffData?.state === "fulfilled" ? movieDetailStore.staffData.value : []
                    }
                  />
                  {movieDetailStore.staffData?.state === "fulfilled" ? (
                    <Col xl={{ span: 5 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                      <h5 className={s.info}>Актеры</h5>
                      <ul className={`${s.actors} ${s.movieInfo}`}>
                        {movieDetailStore.staffData.value
                          .filter((el) => el.professionText === "Актеры")
                          .map((item) => (
                            <li key={item.staffId}>
                              <Link to={`/actor/${item.staffId}`}>
                                {item.nameRu ? item.nameRu : item.nameEn}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </Col>
                  ) : null}
                </Row>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Flex vertical align="center" justify="center">
              <h3 className={s.title}>Смотреть онлайн</h3>
              <VideoPlayer />
            </Flex>
          </Col>

          <Col span={24}>
            {sequelsAndPrequelsDataResponse.length > 0 ? (
              <Flex vertical>
                <h3
                  className={
                    sequelsAndPrequelsDataResponse.length > 2
                      ? s.sequelsTitle
                      : ""
                  }
                  style={{ fontSize: 18 }}
                >
                  Сиквелы и приквелы
                </h3>
                <div
                  className={
                    sequelsAndPrequelsDataResponse.length > 2
                      ? s.sequelsAndPrequels
                      : ""
                  }
                >
                  {sequelsAndPrequelsDataResponse.map((item, index) => (
                    <MoviesCard key={index} movie={item} />
                  ))}
                </div>
              </Flex>
            ) : null}
          </Col>
        </Row>
      )}
    </div>
  );
});
export default MovieDetail;

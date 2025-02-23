import { observer } from "mobx-react-lite";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { movieDetailStore } from "../../../shared/store/movieDetailStore";
import { Col, Flex, Row, Spin } from "antd";
import s from "./MovieDetail.module.scss";
import { MovieInfoBlock } from "@/widgets/MovieInfoBlock";
import { MoviesCard } from "@/entities/Movies";
import { VideoPlayer } from "@/widgets/VideoPlayer";
import { LoadingOutlined } from "@ant-design/icons";
const MovieDetail = observer(() => {
  const { id } = useParams();
  const location = useLocation();

  const {
    filmData,
    staffData,
    sequelsAndPrequelsData,
    getFilmAction,
    getStaffAction,
    getSequelsAndPrequelsAction,
  } = movieDetailStore;

  useEffect(() => {
    if (id) {
      getFilmAction(id);
      getSequelsAndPrequelsAction(id);
      getStaffAction(id);
    }
  }, [id, location.pathname]);

  const sequelsAndPrequelsDataResponse =
    sequelsAndPrequelsData?.state === "fulfilled"
      ? sequelsAndPrequelsData.value
      : [];

  return (
    <div className={s.movieWrapper}>
      {filmData?.state === "pending" &&
        staffData?.state === "pending" &&
        sequelsAndPrequelsData?.state === "pending" && (
          <Flex justify="center" align="center">
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
            />
          </Flex>
        )}
      {filmData?.state === "fulfilled" && (
        <Row>
          <Col xl={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <h2 className={s.title}>{filmData.value.nameRu}</h2>
            <Row gutter={[10, 10]} justify={"center"}>
              <Col xl={{ span: 5 }} sm={{ span: 10 }} xs={{ span: 24 }}>
                <img
                  className={s.image}
                  src={filmData.value.posterUrl}
                  alt={filmData.value.nameRu}
                />
              </Col>
              <Col xl={{ span: 19 }} sm={{ span: 14 }} xs={{ span: 24 }}>
                <Row>
                  <MovieInfoBlock
                    movieData={filmData.value}
                    staffData={
                      staffData?.state === "fulfilled" ? staffData.value : []
                    }
                  />
                  {staffData?.state === "fulfilled" ? (
                    <Col xl={{ span: 5 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                      <h5 className={s.info}>Актеры</h5>
                      <ul className={`${s.actors} ${s.movieInfo}`}>
                        {staffData.value
                          .filter((el) => el.professionText === "Актеры")
                          .map((item) => (
                            <li key={item.staffId}>
                              {item.nameRu ? item.nameRu : item.nameEn}
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

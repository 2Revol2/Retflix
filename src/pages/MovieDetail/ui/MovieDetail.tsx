import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { movieStore } from "../store/movieStore";
import { Col, Flex, Rate, Row } from "antd";
import s from "./MovieDetail.module.scss";
import { MovieInfo } from "../components/MovieInfo/MovieInfo";
import { MovieRating } from "../components/MovieRating/MovieRating";
const MovieDetail = observer(() => {
  const { filmData, staffData, getFilmAction, getStaffAction } = movieStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFilmAction(id);
      // getSequelsAndPrequelsAction(id);
      getStaffAction(id);
    }
  }, [id]);

  return (
    <div className={s.movieWrapper}>
      {filmData?.state === "fulfilled" && staffData?.state === "fulfilled" && (
        <Row>
          <Col xl={{ span: 20 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <Row align={"middle"}>
              <Col xl={{ span: 12 }} sm={{ span: 14 }} xs={{ span: 24 }}>
                <h2 className={s.movieName}>{filmData.value.nameRu}</h2>
              </Col>
              <Col xl={{ span: 12 }} sm={{ span: 10 }} xs={{ span: 24 }}>
                <Flex align="center" gap={15}>
                  <h3>{filmData.value.ratingKinopoisk}/10</h3>
                  <Rate
                    disabled
                    allowHalf
                    value={(filmData.value.ratingKinopoisk || 0) / 2}
                  />
                </Flex>
              </Col>
            </Row>
            <Row gutter={[10, 10]}>
              <Col xl={{ span: 5 }} sm={{ span: 8 }} xs={{ span: 24 }}>
                <img
                  className={s.image}
                  src={filmData.value.posterUrl}
                  alt={filmData.value.nameRu}
                />
              </Col>
              <Col xl={{ span: 19 }} sm={{ span: 16 }} xs={{ span: 24 }}>
                <Row>
                  <Col xl={{ span: 18 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Row>
                      <Flex vertical gap={10}>
                        <MovieInfo
                          info="Год:"
                          movieInfo={filmData.value.year}
                        />
                        <MovieInfo
                          info="Страна:"
                          movieInfo={filmData.value.countries.map(
                            (item) => item.country
                          )}
                        />
                        <MovieInfo
                          info="Жанр:"
                          movieInfo={filmData.value.genres.map(
                            (item) => item.genre
                          )}
                        />
                        <MovieInfo
                          info="Режиссёр:"
                          movieInfo={staffData.value
                            .filter((el) => el.professionText === "Режиссеры")
                            .map((item) => item.nameRu)}
                        />

                        {filmData.value.filmLength ? (
                          <MovieInfo
                            info="Продолжительность:"
                            movieInfo={filmData.value.filmLength}
                            filmLenght={"мин."}
                          />
                        ) : null}
                        <Row>
                          <Col
                            xl={{ span: 18 }}
                            sm={{ span: 20 }}
                            xs={{ span: 24 }}
                          >
                            <Flex vertical>
                              <h5 className={s.info}>Описание:</h5>
                              <p className={s.movieInfo}>
                                {filmData.value.description}
                              </p>
                            </Flex>
                            <Row>
                              <Col span={12}>
                                <Flex gap={20}>
                                  <MovieRating
                                    label="КиноПоиск:"
                                    type="kinopoisk"
                                    rating={filmData.value.ratingKinopoisk}
                                  />
                                  <MovieRating
                                    label="IMDB:"
                                    type="imdb"
                                    rating={filmData.value.ratingImdb}
                                  />
                                </Flex>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Flex>
                    </Row>
                  </Col>
                  <Col>
                    <h5 className={s.info}>Актеры</h5>
                    <ul className={`${s.actors} ${s.movieInfo}`}>
                      {staffData.value
                        .filter((el) => el.professionText === "Актеры")
                        .map((item) => (
                          <li>{item.nameRu}</li>
                        ))}
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={{ span: 4 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            Сиквелы
          </Col>
        </Row>
      )}
    </div>
  );
});
export default MovieDetail;

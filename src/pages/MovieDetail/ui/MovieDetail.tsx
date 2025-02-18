import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { movieStore } from "../store/movieStore";
import { Col, Flex, Rate, Row } from "antd";
import s from "./MovieDetail.module.scss";

export const MovieDetail = observer(() => {
  const {
    filmData,
    staffData,
    getFilmAction,
    getStaffAction,
  } = movieStore;
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
                      <Col span={24}>
                        <Flex vertical gap={10}>
                          <Row align={"middle"}>
                            <Col span={12}>
                              <h5 className={s.info}>Год:</h5>
                            </Col>
                            <Col span={12}>
                              <p className={s.movieInfo}>
                                {filmData.value.year}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={12}>
                              <h5 className={s.info}>Страна:</h5>
                            </Col>
                            <Col span={12}>
                              <ul className={s.movieInfo}>
                                {filmData.value.countries.map((item, index) => (
                                  <li key={index}>{item.country}</li>
                                ))}
                              </ul>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={12}>
                              <h5 className={s.info}>Жанр:</h5>
                            </Col>
                            <Col span={12}>
                              <ul className={s.movieInfo}>
                                {filmData.value.genres.map((item, index) => (
                                  <li key={index}>{item.genre}</li>
                                ))}
                              </ul>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={12}>
                              <h5 className={s.info}>Режиссёр:</h5>
                            </Col>
                            <Col span={12}>
                              <ul className={s.movieInfo}>
                                {staffData.value
                                  .filter(
                                    (el) => el.professionText === "Режиссеры"
                                  )
                                  .map((item) => (
                                    <li>{item.nameRu}</li>
                                  ))}
                              </ul>
                            </Col>
                          </Row>

                          {filmData.value.filmLength ? (
                            <Row align={"middle"}>
                              <Col
                                xl={{ span: 12 }}
                                sm={{ span: 16 }}
                                xs={{ span: 18 }}
                              >
                                <h5 className={s.info}>Продолжительность:</h5>
                              </Col>
                              <Col
                                xl={{ span: 12 }}
                                sm={{ span: 8 }}
                                xs={{ span: 6 }}
                              >
                                <p className={s.movieInfo}>
                                  {filmData.value.filmLength} мин.
                                </p>
                              </Col>
                            </Row>
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
                                    <Flex gap={10} align="center">
                                      <h5 style={{ color: "var(--hover)" }}>
                                        КиноПоиск:
                                      </h5>
                                      <p className={s.movieInfo}>
                                        {filmData.value.ratingKinopoisk}
                                      </p>
                                    </Flex>
                                    <Flex gap={10} align="center">
                                      <h5 style={{ color: "var(--logo)" }}>
                                        IMDB:
                                      </h5>
                                      <p className={s.movieInfo}>
                                        {filmData.value.ratingImdb}
                                      </p>
                                    </Flex>
                                  </Flex>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Flex>
                      </Col>
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

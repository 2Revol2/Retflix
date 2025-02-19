import { MovieInfo, MovieRating } from "@/entities/Movies";
import { Col, Flex, Row } from "antd";
import s from "./MovieInfoBlock.module.scss";
import { MovieDetail, Staff } from "@/shared/api/movieDeatailApi/types";

type MovieInfoBlock = {
  movieData: MovieDetail;
  staffData: Staff[];
};
export const MovieInfoBlock = ({ movieData, staffData }: MovieInfoBlock) => {
  return (
    <Col xl={{ span: 18 }} sm={{ span: 24 }} xs={{ span: 24 }}>
      <Row>
        <Flex vertical gap={10}>
          <MovieInfo info="Год:" movieInfo={movieData.year} />
          <MovieInfo
            info="Страна:"
            movieInfo={movieData.countries.map((item) => item.country)}
          />
          <MovieInfo
            info="Жанр:"
            movieInfo={movieData.genres.map((item) => item.genre)}
          />
          <MovieInfo
            info="Режиссёр:"
            movieInfo={staffData
              .filter((el) => el.professionText === "Режиссеры")
              .map((item) => item.nameRu)}
          />

          {movieData.filmLength ? (
            <MovieInfo
              info="Продолжительность:"
              movieInfo={movieData.filmLength}
              filmLenght={"мин."}
            />
          ) : null}
          <Row>
            <Col xl={{ span: 18 }} sm={{ span: 20 }} xs={{ span: 24 }}>
              <Flex vertical>
                <h5 className={s.info}>Описание:</h5>
                <p className={s.movieInfo}>{movieData.description}</p>
              </Flex>
              <Row>
                <Col span={12}>
                  <Flex gap={20}>
                    <MovieRating
                      label="КиноПоиск:"
                      type="kinopoisk"
                      rating={movieData.ratingKinopoisk}
                    />
                    <MovieRating
                      label="IMDB:"
                      type="imdb"
                      rating={movieData.ratingImdb}
                    />
                  </Flex>
                </Col>
              </Row>
            </Col>
          </Row>
        </Flex>
      </Row>
    </Col>
  );
};

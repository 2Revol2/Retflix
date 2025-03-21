import { MovieRating } from "@/entities/Movies";
import { Col, Flex, Row } from "antd";
import s from "./MovieInfoBlock.module.scss";
import { MovieDetail, Staff } from "@/shared/api/movieDetailApi/types";
import { ActorAndMovieInfo } from "@/entities/ActorAndMovieInfo";

type MovieInfoBlock = {
  movieData: MovieDetail;
  staffData: Staff[] | [];
};
export const MovieInfoBlock = ({ movieData, staffData }: MovieInfoBlock) => {
  return (
    <Col xl={{ span: 18 }} sm={{ span: 24 }} xs={{ span: 24 }}>
      <Row>
        <Flex vertical gap={10}>
          <ActorAndMovieInfo
            type="movie"
            info="Год:"
            infoFromApi={movieData.year}
          />
          <ActorAndMovieInfo
            type="movie"
            info="Страна:"
            infoFromApi={movieData.countries.map((item) => item.country)}
          />
          <ActorAndMovieInfo
            type="movie"
            info="Жанр:"
            infoFromApi={movieData.genres.map((item) => item.genre)}
          />
          <ActorAndMovieInfo
            type="movie"
            info="Режиссёр:"
            infoFromApi={staffData
              .filter((el) => el.professionText === "Режиссеры")
              .map((item) => item.nameRu)}
          />

          {movieData.filmLength ? (
            <ActorAndMovieInfo
              type="movie"
              info="Продолжительность:"
              infoFromApi={movieData.filmLength}
              moreInfo={"мин."}
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

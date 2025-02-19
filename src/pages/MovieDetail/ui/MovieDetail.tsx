import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { movieDetailStore } from "../../../shared/store/movieDetailStore";
import { Col, Row } from "antd";
import s from "./MovieDetail.module.scss";
import { MovieInfoBlock } from "@/widgets/MovieInfoBlock";
const MovieDetail = observer(() => {
  const { filmData, staffData, getFilmAction, getStaffAction } =
    movieDetailStore;
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
            <h2 className={s.movieName}>{filmData.value.nameRu}</h2>
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
                  <MovieInfoBlock
                    movieData={filmData.value}
                    staffData={staffData.value}
                  />
                  <Col>
                    <h5 className={s.info}>Актеры</h5>
                    <ul className={`${s.actors} ${s.movieInfo}`}>
                      {staffData.value
                        .filter((el) => el.professionText === "Актеры")
                        .map((item, index) => (
                          <li key={index}>{item.nameRu}</li>
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

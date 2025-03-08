import { LoadingOutlined } from "@ant-design/icons";
import { Col, Flex, Row, Spin } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import s from "./ActorDetail.module.scss";
import { Title } from "@/shared/ui/Title/Title";
import { ActorInfoBlock } from "@/widgets/ActorInfoBlock/ui/ActorInfoBlock";
import { useStore } from "@/app/providers/StoreContext";

const ActorDetail = observer(() => {
  const { moviesStore } = useStore();
  const { id } = useParams();

  useEffect(() => {
    moviesStore.getActorByIdAction(id);
  }, []);

  return (
    <div className={s.actorWrapper}>
      {moviesStore.actorData?.state === "pending" && (
        <Flex justify="center" align="center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </Flex>
      )}

      {moviesStore.actorData?.state === "fulfilled" && (
        <>
          <Row>
            <Col xl={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
              <Row gutter={[10, 0]}>
                <Col xl={{ span: 5 }} sm={{ span: 10 }} xs={{ span: 24 }}>
                  <img
                    className={s.image}
                    src={moviesStore.actorData.value.posterUrl}
                    alt={moviesStore.actorData.value.nameRu}
                  />
                </Col>
                <Col xl={{ span: 19 }} sm={{ span: 14 }} xs={{ span: 24 }}>
                  <div className={s.infoBlock}>
                    <Title>{moviesStore.actorData.value.nameRu}</Title>
                    <h3>{moviesStore.actorData.value.nameEn}</h3>
                  </div>
                  <ActorInfoBlock actorData={moviesStore.actorData.value} />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Title>Все фильмы</Title>
              <Flex justify="space-between">
                <p className={s.title}>№</p>
                <p className={s.title}>Рейтинг</p>
              </Flex>
              {moviesStore.actorData.value.films.map((film, index) => {
                return (
                  <Flex
                    align="center"
                    justify="space-between"
                    key={film.nameRu}
                  >
                    <p>{index + 1}</p>
                    <p className={s.filmName}>
                      <Link to={`/movie/${film.filmId}`}>
                        {film.nameRu ? film.nameRu : film.nameEn}
                      </Link>
                    </p>
                    <p>{film.rating ? film.rating : "-----"}</p>
                  </Flex>
                );
              })}
            </Col>
          </Row>
        </>
      )}
    </div>
  );
});
export default ActorDetail;

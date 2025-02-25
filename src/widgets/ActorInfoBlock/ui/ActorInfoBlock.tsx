import { ActorAndMovieInfo } from "@/entities/ActorAndMovieInfo";
import { Col, Flex, Row } from "antd";
import s from "./ActorInfoBlock.module.scss";
import { Actor } from "@/shared/api/ActorDetailApi/types";

type ActorInfoBlockProps = {
  actorData: Actor;
};

export const ActorInfoBlock = ({ actorData }: ActorInfoBlockProps) => {
  return (
    <>
      <h5 className={s.about}>О персоне</h5>
      <Flex vertical gap={10}>
        <ActorAndMovieInfo
          type="actor"
          info="Карьера"
          infoFromApi={actorData.profession}
        />
        <ActorAndMovieInfo
          type="actor"
          info="Рост"
          infoFromApi={actorData.growth}
          moreInfo="см"
        />

        <ActorAndMovieInfo
          type="actor"
          info="Дата рождения"
          infoFromApi={actorData.birthday}
          moreInfo={`(${actorData.age} лет)`}
        />

        <ActorAndMovieInfo
          type="actor"
          info="Место рождения"
          infoFromApi={actorData.birthplace}
        />
        {actorData.spouses.length > 0 && (
          <Row>
            <Col xl={{ span: 12 }} sm={{ span: 16 }} xs={{ span: 15 }}>
              <h3 className={s.title}>Супруга</h3>
            </Col>
            <Col xl={{ span: 12 }} sm={{ span: 8 }} xs={{ span: 9 }}>
              {
                <div>
                  {actorData.spouses.map((item) => {
                    return (
                      <p key={item.name}>
                        {item.name}, <span>{item.children}</span> детей
                      </p>
                    );
                  })}
                </div>
              }
            </Col>
          </Row>
        )}
        <ActorAndMovieInfo
          type="actor"
          info="Всего фильмов"
          infoFromApi={actorData.films.length}
        />
        <Row>
          <Col span={12}>
            <h3 className={s.title}>Факты</h3>
          </Col>
          <Row>
            <Col xl={{ span: 21 }} sm={{ span: 23 }} xs={{ span: 24 }}>
              <ul>
                {actorData.facts.map((item) => {
                  return (
                    <li className={s.listItem} key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Row>
      </Flex>
    </>
  );
};

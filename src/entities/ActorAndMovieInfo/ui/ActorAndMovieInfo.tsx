import { Col, Row } from "antd";
import { ReactNode } from "react";
import s from "./ActorAndMovieInfo.module.scss";

type MovieInfoProps = {
  info: string;
  infoFromApi: ReactNode;
  moreInfo?: string;
  type: "movie" | "actor";
};

export const ActorAndMovieInfo = ({
  info,
  infoFromApi,
  moreInfo,
  type = "movie",
}: MovieInfoProps) => {
  return (
    <Row>
      <Col xl={{ span: 12 }} sm={{ span: 16 }} xs={{ span: 15 }}>
        <h5 className={type === "movie" ? s.movie : s.actor}>{info}</h5>
      </Col>
      <Col xl={{ span: 12 }} sm={{ span: 8 }} xs={{ span: 9 }}>
          {Array.isArray(infoFromApi) ? (
            <ul>
              {infoFromApi.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          ) : (
            <p>{`${infoFromApi} ${moreInfo ? moreInfo : ""}`}</p>
          )}
      </Col>
    </Row>
  );
};

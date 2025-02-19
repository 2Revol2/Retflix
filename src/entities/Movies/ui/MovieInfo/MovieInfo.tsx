import { Col, Row } from "antd";
import s from "./MovieInfo.module.scss";
import { ReactNode } from "react";

type MovieInfoProps = {
  info: string;
  movieInfo: ReactNode;
  filmLenght?: string;
};

export const MovieInfo = ({ info, movieInfo, filmLenght }: MovieInfoProps) => {
  return (
    <Row>
      <Col xl={{ span: 12 }} sm={{ span: 16 }} xs={{ span: 18 }}>
        <h5 className={s.info}>{info}</h5>
      </Col>
      <Col xl={{ span: 12 }} sm={{ span: 8 }} xs={{ span: 6 }}>
        {Array.isArray(movieInfo) ? (
          <ul>
            {movieInfo.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        ) : (
          <p>{`${movieInfo} ${filmLenght ? filmLenght : ""}`}</p>
        )}
      </Col>
    </Row>
  );
};

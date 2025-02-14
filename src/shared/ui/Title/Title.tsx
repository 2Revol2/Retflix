import s from "./Title.module.scss";
type TitleProps = {
  children: string | undefined;
};
export const Title = ({ children }: TitleProps) => {
  return <h2 className={s.title}>{children}</h2>;
};

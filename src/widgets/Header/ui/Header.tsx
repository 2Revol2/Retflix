import s from "./Header.module.scss";
import { Layout } from "antd";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <Layout.Header className={s.header}>
      <Link to="/">
        <h1 className={s.title}>Retflix</h1>
      </Link>
      <div className={s.inputWrapper}>
        <input className={s.search} type="text" placeholder="Поиск фильма" />
        <div className={s.iconWrapper}>
          <IoSearchSharp className={s.searchIcon} />
        </div>
      </div>
    </Layout.Header>
  );
};

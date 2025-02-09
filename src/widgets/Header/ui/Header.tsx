import s from "./Header.module.scss";
import { Layout } from "antd";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiMenuFold4Fill, RiMenuFold3Fill } from "react-icons/ri";
import { useState } from "react";
type HeaderProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <Layout.Header className={s.header}>
      <div className={s.mobileMenu}>
        {isOpen ? (
          <RiMenuFold4Fill className={s.openIcon}
            onClick={() => setIsOpen((prev) => !prev)}
            color="white"
            size={40}
          />
        ) : (
          <RiMenuFold3Fill
            onClick={() => setIsOpen((prev) => !prev)}
            color="white"
            size={40}
            className={s.openIcon}
          />
        )}

        <Link to="/">
          <h1 className={s.title}>Retflix</h1>
        </Link>
      </div>

      <div className={s.inputWrapper}>
        <input className={`${s.search} ${isSearchOpen ? s.searchOpen : ''}`} type="text" placeholder="Поиск фильма" />
        <div
          onClick={() => setIsSearchOpen((prev) => !prev)}
          className={s.iconWrapper}
        >
          <IoSearchSharp className={s.searchIcon} />
        </div>
      </div>
    </Layout.Header>
  );
};

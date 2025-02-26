import s from "./Header.module.scss";
import { Layout } from "antd";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiMenuFold4Fill, RiMenuFold3Fill } from "react-icons/ri";
import { useState } from "react";
import { Search } from "@/features/Search";
import { motion } from "framer-motion";
type HeaderProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <Layout.Header className={s.header}>
      <motion.div
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5 }}
       variants={{
         hidden: { opacity: 0, y: -20 },
         visible: { opacity: 1, y: 0 },
       }}
        className={s.mobileMenu}
      >
        {isOpen ? (
          <RiMenuFold4Fill
            className={s.openIcon}
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
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className={s.inputWrapper}
      >
        <Search isSearchOpen={isSearchOpen} />
        <div
          onClick={() => setIsSearchOpen((prev) => !prev)}
          className={s.iconWrapper}
        >
          <IoSearchSharp className={s.searchIcon} />
        </div>
      </motion.div>
    </Layout.Header>
  );
};

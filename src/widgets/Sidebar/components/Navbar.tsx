import { SIDEBAR_MENU_BOTTOM, SIDEBAR_MENU_TOP } from "@/shared/const/menu";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss";
import { Divider } from "antd";
type NavbarProps = {
  isOpen: boolean;
};

export const Navbar = ({ isOpen }: NavbarProps) => {


  return (
    <>
      <ul className={s.list}>
        {SIDEBAR_MENU_TOP.map((item) => (
          <li className={isOpen ? s.listItem : ""} key={item.title}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.active}` : `${s.link}`
              }
              to={item.url}
            >
              <div>
                <span className={isOpen ? s.icon : ""}>{item.icon}</span>{" "}
                <p>{!isOpen && item.title}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      <Divider className={s.divider} />
      <ul className={s.list}>
        {SIDEBAR_MENU_BOTTOM.map((item) => (
          <li className={isOpen ? s.listItem : ""} key={item.title}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.active}` : `${s.link}`
              }
              to={item.url}
            >
              <div>
                <span className={isOpen ? s.icon : ""}>{item.icon}</span>
                <p>{!isOpen && item.title}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

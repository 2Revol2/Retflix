import { SIDEBAR_MENU_BOTTOM, SIDEBAR_MENU_TOP } from "@/shared/const/menu";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss";
import { Divider } from "antd";
export const Navbar = () => {
  return (
    <>
      <ul className={s.list}>
        {SIDEBAR_MENU_TOP.map((item) => (
          <li key={item.title}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.active}` : `${s.link}`
              }
              to={item.url}
            >
              <div>
                <span>{item.icon}</span> <p>{item.title}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      <Divider className={s.divider} />
      <ul className={s.list}>
        {SIDEBAR_MENU_BOTTOM.map((item) => (
          <li key={item.title}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.active}` : `${s.link}`
              }
              to={item.url}
            >
              <div>
                <span>{item.icon}</span> <p>{item.title}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

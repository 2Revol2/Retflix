import { NavLink } from "react-router-dom";
import s from "./SidebarMenuList.module.scss";
import { JSX } from "react";
import { Tooltip } from "antd";
type SidebarMenuListProps = {
  List: {
    title: string;
    icon: JSX.Element;
    url: string;
  }[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SidebarMenuList = ({
  List,
  isOpen,
  setIsOpen,
}: SidebarMenuListProps) => {
  return (
    <ul className={s.list}>
      {List.map((item) => (
        <li className={isOpen ? s.listItem : ""} key={item.title}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.active}` : `${s.link}`
            }
            onClick={() => setIsOpen(true)}
            to={item.url}
          >
            <div className={isOpen ? s.linkWrapperOpen : s.linkWrapper}>
              {isOpen ? (
                <Tooltip placement="rightBottom" title={item.title}>
                  <span className={isOpen ? s.icon : ""}>{item.icon}</span>
                </Tooltip>
              ) : (
                <span className={isOpen ? s.icon : ""}>{item.icon}</span>
              )}
              <p>{!isOpen && item.title}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

import { SIDEBAR_MENU_BOTTOM, SIDEBAR_MENU_TOP } from "@/shared/const/menu";
import s from "./Navbar.module.scss";
import { Divider } from "antd";
import { SidebarMenuList } from "../SidebarMenuList/SidebarMenuList";
type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <>
      <SidebarMenuList
        List={SIDEBAR_MENU_TOP}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Divider className={s.divider} />
      <SidebarMenuList
        List={SIDEBAR_MENU_BOTTOM}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

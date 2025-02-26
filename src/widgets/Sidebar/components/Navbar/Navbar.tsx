import { SIDEBAR_MENU_BOTTOM, SIDEBAR_MENU_TOP } from "@/shared/const/menu";
import s from "./Navbar.module.scss";
import { Divider } from "antd";
import { SidebarMenuList } from "../SidebarMenuList/SidebarMenuList";
import { motion } from "framer-motion";
type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
    >
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
    </motion.div>
  );
};

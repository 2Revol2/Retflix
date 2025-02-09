import { useMobile } from "@/shared/lib/hooks/useMobile";
import { Navbar } from "../components/Navbar";
import s from "./Sidebar.module.scss";
import { Layout } from "antd";
type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const isMobile = useMobile(600);

  return (
    <Layout.Sider
      collapsed={isOpen}
      width={isMobile ? (isOpen ? "40px" : "100%") : 250}
      className={isMobile ? (isOpen ? s.sidebarMobile : s.sidebar) : s.sidebar}
    >
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
    </Layout.Sider>
  );
};

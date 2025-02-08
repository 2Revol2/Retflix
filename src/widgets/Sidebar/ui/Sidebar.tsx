import { Navbar } from "../components/Navbar";
import s from "./Sidebar.module.scss";
import { Layout } from "antd";

export const Sidebar = () => {
  return (
    <Layout.Sider  width={250} className={s.sidebar}>
      
      <Navbar />
    </Layout.Sider>
  );
};

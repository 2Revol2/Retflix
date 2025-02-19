import { Header } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { Layout } from "antd";
import { AppRouter } from "./providers/RouterProvider";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
export const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Layout className="wrapper">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Layout className="contentWrapper">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Content className="content">
            <AppRouter />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

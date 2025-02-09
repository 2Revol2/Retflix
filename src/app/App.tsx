import { Header } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { Layout } from "antd";
import { AppRouter } from "./providers/routerProvider";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
export const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Layout
        style={{
          minHeight: "100vh",
          backgroundColor: "#000000",
          overflowX: 'hidden'
        }}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Layout
          style={{
            backgroundColor: "#000000",
            padding: "0 5px",
          }}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Content
            style={{
              margin: "0 10px",
              backgroundColor: "#101010",
              padding: "10px",
              borderRadius: "5px",
              overflow: "auto",
              height: "calc(100vh - 64px)",
            }}
          >
            <AppRouter />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

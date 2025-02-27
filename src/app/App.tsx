import { Header } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { AppRouter } from "./providers/routerProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";
export const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    toast("Если изображения не загружаются, попробуйте включить VPN.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }, []);

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
      <ToastContainer />
    </div>
  );
};

import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./styles/index.css";
import "./themes/normal.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./providers/ErrorBoundary";
import { ConfigProvider } from "antd";
import { config } from "./providers/AntDesign/antDesign.ts";
createRoot(document.getElementById("root")!).render(

    <BrowserRouter>
      <ErrorBoundary>
        <ConfigProvider theme={config}>
          <App />
        </ConfigProvider>
      </ErrorBoundary>
    </BrowserRouter>

);

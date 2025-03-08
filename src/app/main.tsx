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
import { RootStoreContext } from "./providers/StoreContext/ui/StoreContext.tsx";
import { RootStore } from "@/shared/store/RootStore.ts";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <RootStoreContext.Provider value={new RootStore()}>
        <ConfigProvider theme={config}>
          <App />
        </ConfigProvider>
      </RootStoreContext.Provider>
    </ErrorBoundary>
  </BrowserRouter>
);

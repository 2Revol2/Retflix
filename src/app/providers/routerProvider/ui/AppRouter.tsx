import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.entries(routeConfig).map(([_, { path, element }]) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

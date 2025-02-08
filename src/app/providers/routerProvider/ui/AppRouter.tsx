import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig";
import { SIDEBAR_MENU_TOP, SIDEBAR_MENU_BOTTOM } from "@/shared/const/menu";
import { MovieCategory } from "@/pages/MovieCategory";
import { MoviesMain } from "@/pages/MoviesMain";
export const AppRouter = () => {
  return (
    <Routes>
      {Object.entries(routeConfig).map(([_, { path, element }]) => (
        <Route key={path} path={path} element={element} />
      ))}
      {SIDEBAR_MENU_TOP.map((item, index) => (
        <Route key={index} path={item.url} element={<MovieCategory />}  />
      ))}
      {SIDEBAR_MENU_BOTTOM.map((item, index) => (
        <Route key={index} path={item.url} element={<MoviesMain/>} />
      ))}
    </Routes>
  );
};

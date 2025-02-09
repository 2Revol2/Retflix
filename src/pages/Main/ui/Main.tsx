import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { mainStorePage } from "../store/MainStore";

export const Main = observer(() => {
  const { moviesData, getMoviesAction } = mainStorePage;
  useEffect(() => {
    getMoviesAction();
  }, []);

  return (
    <div>
      {moviesData?.state === "fulfilled" &&
        moviesData.value.items.map((item) => {
          return <p style={{color: 'white'}} key={item.nameRu}>{item.nameRu}</p>;
        })}
    </div>
  );
});

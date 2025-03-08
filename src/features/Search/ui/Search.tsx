import { AutoComplete } from "antd";
import s from "./Search.module.scss";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/app/providers/StoreContext";

const movieType = {
  FILM: "Фильм",
  VIDEO: "Видео",
  TV_SERIES: "Сериал",
  TV_SHOW: "ТВ-Шоу",
  MINI_SERIES: 'Мини-сериал'
};

type SearchProps = {
  isSearchOpen: boolean;
};

export const Search = observer(({ isSearchOpen }: SearchProps) => {
  const {moviesStore} = useStore()
  const [value, setValue] = useState("");
  const { searchQueryData, getSearchQueryAction } = moviesStore;
  const debouncedKeyword = useDebounce(value, 1000);

  const navigate = useNavigate();

  useEffect(() => {
    getSearchQueryAction(
      null,
      null,
      null,
      1,
      debouncedKeyword,
      "RATING",
      "ALL"
    );
  }, [debouncedKeyword]);

  return (
    <AutoComplete
      className={`${s.search} ${isSearchOpen ? s.searchOpen : ""}`}
      placeholder="Поиск"
      options={
        searchQueryData?.state === "fulfilled"
          ? searchQueryData.value.items
              .filter((movie) => movie.nameRu)
              .map((movie) => ({
                value: String(movie.kinopoiskId),
                label: `${movie.nameRu} - ${movie.year} ${
                  movieType[movie.type as keyof typeof movieType]
                }`,
              }))
          : []
      }
      onChange={(newValue: string) => setValue(newValue)}
      onSelect={(id: string) => {
        navigate(`/movie/${id}`);
        setValue("");
      }}
      value={value}
    />
  );
});

import { AutoComplete } from "antd";
import s from "./Search.module.scss";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { moviesStore } from "@/shared/store/MoviesStore";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { useNavigate } from "react-router-dom";

type SearchProps = {
  isSearchOpen: boolean;
};
export const Search = observer(({ isSearchOpen }: SearchProps) => {
  const [value, setValue] = useState("");
  const { searchQueryData, getSearchQueryAction } = moviesStore;
  const debouncedKeyword = useDebounce(value, 1000);

  const navigate = useNavigate();

  useEffect(() => {
    getSearchQueryAction(null, null, null, 1, value, "RATING", "ALL");
  }, [debouncedKeyword]);

  const onChangeHandler = (value: string) => {
    setValue(value);
  };

  const onSelect = (_:string, option: any) => {
    navigate(`movie/${option.id}`);
  };

  return (
    <AutoComplete
      className={`${s.search} ${isSearchOpen ? s.searchOpen : ""}`}
      placeholder="Search..."
      onChange={onChangeHandler}
      options={
        searchQueryData?.state === "fulfilled"
          ? searchQueryData.value.items
              .filter((movie) => movie.nameRu || movie.nameEn)
              .map((movie) => ({
                value: movie.nameRu ? movie.nameRu : movie.nameEn,
                label: movie.nameRu ? movie.nameRu : movie.nameEn,
                id: movie.kinopoiskId
              }))
          : []
      }
      onSelect={onSelect}
      value={value}
    />
  );
});

import { Select } from "antd";
import s from "./Filter.module.scss";

type FilterProps = {
  genresAndCountries: {
    genres: {
      id: number;
      genre: string;
    }[];
    countries: {
      id: number;
      country: string;
    }[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      genre: null | number;
      country: null | number;
      order: string;
    }>
  >;
  categories: {
    genre: null | number;
    country: null | number;
    order: string;
  };
  orderList: {
    id: string;
    value: string;
  }[];
};

export const Filter = ({
  genresAndCountries,
  setFilters,
  categories,
  orderList,
}: FilterProps) => {
  const selectGenre = (value: number) => {
    setFilters((prev) => ({ ...prev, genre: value }));
  };

  const selectCountry = (value: number) => {
    setFilters((prev) => ({ ...prev, country: value }));
  };

  const selectSort = (value: string) => {
    setFilters((prev) => ({ ...prev, order: value }));
  };
  return (
    <div className={s.filters}>
      <Select
        className={s.select}
        showSearch
        placeholder="Сортировка"
        optionFilterProp="label"
        onChange={selectSort}
        value={categories.order}
        options={orderList.map((item) => {
          return {
            value: item.id,
            label: item.value,
          };
        })}
      />

      <Select
        className={s.select}
        showSearch
        placeholder="Жанр"
        optionFilterProp="label"
        onChange={selectGenre}
        value={categories.genre}
        options={genresAndCountries.genres.map((item) => {
          return {
            value: item.id,
            label: item.genre,
          };
        })}
      />

      <Select
        className={s.select}
        showSearch
        placeholder="Страна"
        optionFilterProp="label"
        onChange={selectCountry}
        value={categories.country}
        options={genresAndCountries.countries.map((item) => {
          return {
            value: item.id,
            label: item.country,
          };
        })}
      />
    </div>
  );
};

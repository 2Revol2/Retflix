import { Button, Select } from "antd";
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
      year: number | null;
    }>
  >;
  categories: {
    genre: null | number;
    country: null | number;
    order: string;
    year: number | null;
  };
  orderList: {
    id: string;
    value: string;
  }[];
  yearList: {
    id: number;
    year: number;
  }[];
};

export const Filter = ({
  genresAndCountries,
  setFilters,
  categories,
  orderList,
  yearList,
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

  const selectYear = (value: number) => {
    setFilters((prev) => ({ ...prev, year: value }));
  };

  const resetFilters = () => {
    setFilters((prev) => ({
      ...prev,
      genre: null,
      country: null,
      order: "NUM_VOTE",
      year: null,
    }));
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

      <Select
        className={s.select}
        showSearch
        placeholder="Год"
        optionFilterProp="label"
        onChange={selectYear}
        value={categories.year}
        options={yearList.map((item) => {
          return {
            value: item.id,
            label: item.year,
          };
        })}
      />

      <Button color="default" variant="solid" onClick={resetFilters}>
        Сборосить фильтры
      </Button>
    </div>
  );
};

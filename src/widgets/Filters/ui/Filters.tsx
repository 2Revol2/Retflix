import { Button, Select } from "antd";
import s from "./Filters.module.scss";

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
  orderList: {
    id: string;
    value: string;
  }[];
  yearList: {
    id: number;
    year: number;
  }[];

  setFilters: React.Dispatch<
    React.SetStateAction<{
      genre: null | number;
      country: null | number;
      order: string;
      year: number | null;
      page: number;
    }>
  >;
  filters: {
    genre: null | number;
    country: null | number;
    order: string;
    year: number | null;
  };
};

export const Filters = ({
  genresAndCountries,
  setFilters,
  filters,
  orderList,
  yearList,
}: FilterProps) => {
  
  return (
    <div className={s.filters}>
      <Select
        className={s.select}
        showSearch
        placeholder="Сортировка"
        optionFilterProp="label"
        onChange={(value: string) => {
          setFilters((prev) => ({ ...prev, order: value }));
        }}
        value={filters.order}
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
        onChange={(value: number) => {
          setFilters((prev) => ({ ...prev, genre: value }));
        }}
        value={filters.genre}
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
        onChange={(value: number) => {
          setFilters((prev) => ({ ...prev, country: value }));
        }}
        value={filters.country}
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
        onChange={(value: number) => {
          setFilters((prev) => ({ ...prev, year: value }));
        }}
        value={filters.year}
        options={yearList.map((item) => {
          return {
            value: item.id,
            label: item.year,
          };
        })}
      />
      <Button
        color="default"
        variant="solid"
        onClick={() => {
          setFilters((prev) => ({
            ...prev,
            genre: null,
            country: null,
            order: "NUM_VOTE",
            year: null,
          }));
        }}
      >
        Сборосить фильтры
      </Button>
    </div>
  );
};

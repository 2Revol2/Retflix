export type Actor = {
  age: number;
  birthday: string;
  birthplace: string;
  death: null | string;
  deathplace: null | string;
  facts: string[];
  films: {
    description: string;
    filmId: number;
    nameEn: string;
    nameRu: string;
    rating: string;
    professionKey: string;
  }[];
  growth: number;
  hasAwards: number;
  nameEn: string;
  nameRu: string;
  personId: number;
  posterUrl: string;
  profession: string;
  sex: string;
  spouses: {
    personId: number;
    name: string;
    sex: string;
    children: number;
    relation: string;
  }[];
};

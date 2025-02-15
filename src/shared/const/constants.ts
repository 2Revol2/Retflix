export const ORDER_LIST = [
  { id: "RATING", value: "За рейтингом" },
  { id: "NUM_VOTE", value: "По голосам" },
];
export const YEAR_LIST = [...new Array(132)].map((_, index) => {
  return {
    id: new Date().getFullYear() - index,
    year: new Date().getFullYear() - index,
  };
});

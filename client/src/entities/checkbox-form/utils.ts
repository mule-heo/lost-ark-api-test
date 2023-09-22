import { Filters } from "./models";

export const filtersFormatter = (filtersObj: Filters) => {
  return Object.keys(filtersObj)
    .filter((key: keyof Filters) => filtersObj[key])
    .join("+");
};

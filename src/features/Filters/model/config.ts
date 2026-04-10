import { useCountryIdsQuery, useGenreIdsQuery } from "entities/filmCollection/api/filmFilterQueries";
import { FilterConfig } from "shared/ui/Select/types";
import { DATE_TITLE } from "../ui/DateFilter/types";
import { DATE_INFO, DATE_MAP } from "../ui/DateFilter/lib/config";
import { formatDate } from "../ui/DateFilter/lib/formatDate";


export const countryFilterConfig: FilterConfig<number | null> = {
  name: "Страны",
  allOptionLabel: "Все страны",
  queryHook: useCountryIdsQuery,
  transformValue: (value: string, allOptionLabel?: string) => 
    value === allOptionLabel ? null : Number(value)
};

export const genreFilterConfig: FilterConfig<number | null> = {
  name: "Жанры",
  allOptionLabel: "Все жанры", 
  queryHook: useGenreIdsQuery,
  transformValue: (value: string, allOptionLabel?: string) =>
    value === allOptionLabel ? null : Number(value)
};

export const dateFilterConfig: FilterConfig<{ yearFrom: number; yearTo: number }> = {
  name: DATE_TITLE,
  staticData: DATE_INFO.map(item => ({ id: item.id, label: item.date })),
  transformValue: (value: string) => {
    const id = Number(value);
    const selected = DATE_MAP.get(id);
    return formatDate(selected || "");
  }
};
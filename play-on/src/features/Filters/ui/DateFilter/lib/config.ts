import { FilterConfig } from "shared/ui/Select/types";
import { DateType } from "../types"

export const DATE_INFO: DateType[] = [
    {id: -1, date: "Released"},
    {id: 0, date: "2026"},
    {id: 1, date: "2025"},
    {id: 2, date: "2024"},
    {id: 3, date: "2023"},
    {id: 4, date: "2022"},
    {id: 5, date: "2021"},
    {id: 6, date: "2020"},
    {id: 7, date: "2019"},
    {id: 8, date: "2018"},
    {id: 9, date: "2017"},
    {id: 10, date: "2016"},
    {id: 11, date: "2015"},
    {id: 12, date: "2014"},
    {id: 13, date: "2013"},
    {id: 14, date: "2012"},
    {id: 15, date: "2011"},
    {id: 16, date: "2011"},
    {id: 17, date: "2000-2010"},
    {id: 18, date: "1990-1999"},
    {id: 19, date: "1980-1989"},
    {id: 20, date: "1970-1979"},
    {id: 21, date: "1960-1969"},
    {id: 22, date: "1950-1959"},
    {id: 23, date: "Before the 1950s"},
]

export const DATE_MAP = new Map<number, string>(
    DATE_INFO.map(d => [d.id, d.date])
)

export const dateFilterConfig: FilterConfig<number> = {
  name: "date",

  staticData: DATE_INFO.map(item => ({
    id: item.id,
    label: item.date,
  })),

  allOptionLabel: "All",

  transformValue: (value: string) => {
    return value === "" ? null : Number(value);
  },
};
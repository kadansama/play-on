import { DateToQuery } from "../types"
import { DATE_INFO, DATE_MAP } from "./config"

export const formatDate = (date: string): DateToQuery=>{
    let yearFrom = 1000
    let yearTo = 3000 
    const res = Number(date)
    if (!Number.isNaN(res)){
        yearTo = res
        yearFrom = res
    }
    else if (date === "Before the 1950s"){
        yearTo = 1950
    } 
    else if (date === "Released"){}
    else{
        [yearFrom, yearTo] = date.split("-").map(Number)
    }
    return {yearFrom, yearTo}
}

export const findDateIdByRange = (dateRange: DateToQuery): number | null => {
  for (const dateInfo of DATE_INFO) {
    const range = formatDate(dateInfo.date);
    if (range.yearFrom === dateRange.yearFrom && range.yearTo === dateRange.yearTo) {
      return dateInfo.id;
    }
  }
  return null;
};

export const getDateStringById = (id: number): string => {
  return DATE_MAP.get(id) || "Released";
};

export const idToDateRange = (id: number | null): DateToQuery => {
  if (id === null || id === -1) {
    return { yearFrom: 1000, yearTo: 3000 };
  }
  
  const dateString = getDateStringById(id);
  return formatDate(dateString);
};
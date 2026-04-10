export type DateType = {
    id?: number, 
    date?: string,
}

export const DATE_TITLE: string = "Год выпуска"

export type DateToQuery = {
    yearFrom: number,
    yearTo: number,
}
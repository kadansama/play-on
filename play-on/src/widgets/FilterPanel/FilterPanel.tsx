import { CountryFilter } from "features/Filters/ui/CountryFilter"
import { GenreFilter } from "features/Filters/ui/GenreFilter"
import { DateFilter } from "features/Filters/ui/DateFilter"
import {  useFilters } from "features/Filters"
import { FilmList } from "shared/ui/FilmList"
import { FilmPreview, Filtered } from "entities/filmCollection/types"
import { UpdateFilters } from "features/Filters/model/usePagination"

import styles from './styles.module.css'
import { DateToQuery } from "features/Filters/ui/DateFilter/types"



interface IFilterPanel {
    filterObj: UpdateFilters
}

export const FilterPanel = ({ filterObj } : IFilterPanel) => {
    const { data, isLoading, setFilters, filters } = useFilters(filterObj)
    const updateFilters = (newPart: Partial<Filtered>) => {
        const newFilters = { ...filters, ...newPart }
        setFilters(newFilters)
    }
    const currentDateValue: DateToQuery = {
        yearFrom: filters.yearFrom,
        yearTo: filters.yearTo
    }

    const currentCountryValue = filters.countries.length > 0 ? filters.countries[0] : null
    const currentGenreValue = filters.genres.length > 0 ? filters.genres[0] : null
    return (
        <div>
            <div className={styles.panel}>
                <DateFilter onChange={(date) => updateFilters({ yearFrom: date.yearFrom, yearTo: date.yearTo }) } value={currentDateValue}/>
                <CountryFilter onChange={(id) => updateFilters({ countries: [id] })} value={currentCountryValue}/>
                <GenreFilter onChange={(id) => updateFilters({ genres: [id] })} value={currentGenreValue}
/>
            </div>
            <FilmList list={data ?? []}/>
            
        </div>
    )
}
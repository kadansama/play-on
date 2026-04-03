import { useMovieFilters } from "entities/filmCollection/api/filmFilterQueries"
import { FilterPanel } from "widgets/FilterPanel"
import { InfoPanel } from "shared/ui/InfoPanel"
import { INFO } from "./config"

import styles from './styles.module.css'



export const MoviesPage = () => {
    return (
        <section className={styles.movie}>
            <InfoPanel title={INFO.title} paragraph={INFO.paragraph} />
            <FilterPanel filterObj={useMovieFilters} />
        </section>
    )
}  
import { useSimularMovieQuery } from "entities/film/model/queries"
import styles from './styles.module.css'
import { MovieCard } from "shared/ui/MovieCard/MovieCard"
import { FILM_LABELS } from "shared/constants/i18n"

type SimularMoviesProps = {
    id: number
}

export const SimularMovies = ({ id }: SimularMoviesProps) => {
    const { data } = useSimularMovieQuery(id)
    
    if (!data || data.length === 0) return null;
    
    return (
        <section className={styles.simular}>
            <h3 className={styles.simular__paragraph}>{FILM_LABELS.SIMILAR_FILMS}</h3>
            <div className={styles.wrapper}>
                {data.map(elem => (
                    <div key={elem.filmId} className={styles.card__box}>
                        <MovieCard id={elem.filmId} src={elem.posterUrlPreview} />
                    </div>
                ))}
            </div>
        </section>
    );
}
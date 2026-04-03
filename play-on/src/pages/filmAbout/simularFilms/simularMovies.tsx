import { useSimularMovieQuery } from "entities/film/model/queries"
import styles from './styles.module.css'
import { MovieCard } from "shared/ui/MovieCard/MovieCard"
type SimularType = {
    id: number
}
export const SimularMovies = ({ id }: SimularType) => {
    const { data } = useSimularMovieQuery(id)
    
    if (!data || data.length === 0) return null;
    
    return (
        <section className={styles.simular}>
            <h3 className={styles.simular__paragraph}>Похожие фильмы</h3>
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
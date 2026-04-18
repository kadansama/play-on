import { useSimularMovieQuery } from "entities/film/model/queries"
import styles from './styles.module.css'
import { MovieCard } from "shared/ui/MovieCard/MovieCard"
import { FILM_LABELS } from "shared/constants/i18n"
import { FilmCarousel } from "widgets/FilmCarousel"

type SimularMoviesProps = {
    id: number | undefined
}

export const SimularMovies = ({ id }: SimularMoviesProps) => {
    if (id === undefined) return null;

    const { data } = useSimularMovieQuery(id)

    if (!data || data.length === 0) return null;

    const films = data.map(item => ({
        kinopoiskId: item.filmId,
        posterUrl: item.posterUrl,
    }));

    return (
        <section className={styles.simular}>
            <h3 className={styles.simular__paragraph}>{FILM_LABELS.SIMILAR_FILMS}</h3>
            <div className={styles.wrapper}>
                <FilmCarousel films={films} title="" />
            </div>
        </section>
    );
}
import styles from './styles.module.css'
import { LogoContent } from './ui/logoContent'
import { MovieBasicInfo } from './ui/MovieBasicInfo'
import { MovieDescription } from './ui/MovieDescription'
import { MovieCredits } from './ui/MovieCredits'
import { MovieTrailerLink } from './ui/MovieTrailerLink'
import { memo } from 'react'
import { useMovieDetails } from './lib';
import { FILM_LABELS } from 'shared/constants/i18n';
import { useFilmActorsQuery, useFilmDirectorsQuery, useFilmTrailerQuery } from 'entities/film/model/queries'

type MovieInfoProps = {
    id: number
}

export const MovieInfo = memo(({ id }: MovieInfoProps) => {
    const { details, isError, data } = useMovieDetails(id);
    const { data: directors } = useFilmDirectorsQuery(id)
    const { data: actors } = useFilmActorsQuery(id)
    const { data: trailer } = useFilmTrailerQuery(id)

    if (isError) {
        return <div>{FILM_LABELS.LOAD_ERROR}</div>
    }

    return (
        <div className={styles.wrapper}>
            <LogoContent nameRu={data?.nameRu} logoUrl={data?.logoUrl} />
            <MovieBasicInfo details={details} />
            <MovieDescription description={data?.description} />
            <MovieCredits directors={directors} actors={actors} />
            <MovieTrailerLink url={trailer?.url} />
        </div>
    )
})
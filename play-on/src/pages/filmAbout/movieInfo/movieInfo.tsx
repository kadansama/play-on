import clsx from 'clsx';

import { useFilmActorsQuery, useFilmDirectorsQuery, useFilmQuery, useFilmTrailerQuery } from 'entities/film/model/queries'
import styles from './styles.module.css'
import { LogoContent } from './ui/logoContent'
import { memo } from 'react'
import { useMovieDetails } from './lib';
import { Button } from 'shared/ui';

type MovieInfoType = {
    id: number
}

export const MovieInfo = memo(({ id }: MovieInfoType) => {
    const { details, isError, data } = useMovieDetails(id);
    const { data: director } = useFilmDirectorsQuery(id)
    const { data: actors } = useFilmActorsQuery(id)
    const { data: trailer } = useFilmTrailerQuery(id)
    if (isError) {
        return <div>Ошибка при загрузке данных</div>
    }
    return (
        <div className={styles.wrapper}>
            <LogoContent nameRu={data?.nameRu} logoUrl={data?.logoUrl} />
            <div className={styles.wrapper__inner}>

                <div className={styles.wrapper__inner}>
                    {details.map((detail) => (
                        <span
                            key={detail.key}
                            className={clsx(styles.text, styles[detail.className])}
                        >
                            {detail.value ?? ""}

                        </span>
                    ))}
                </div>
            </div>
            <p className={styles.description}>
                {data?.description}
            </p>
            <p className={styles.directors}>
                <span className={styles.bigText}>Режиссеры : </span>
                <span>
                    {director && director.length > 0
                        ? director.map(person => person.nameRu).join(', ')
                        : 'Не указаны'}
                </span>
            </p>
            <p className={styles.actors}>
                <span className={styles.bigText}>Актеры : </span>
                <span>
                    {actors && actors.length > 0
                        ? actors.map(actor => actor.nameRu).join(', ')
                        : 'Не указаны'}
                </span>
            </p>
            {trailer?.url && (
                <a className={styles.link} target="_blank" href={trailer.url}>
                    Трейлер
                </a>
            )}

        </div>
    )
})
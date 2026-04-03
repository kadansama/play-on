import { useFilmTrailerQuery } from "entities/film/model/queries";
import { ReactNode } from "react"

import styles from './styles.module.css'

type FilmPlayer = {
    id: number
}

export const FilmPlayer = ({id}: FilmPlayer) => {
    return (
        <div>
            <iframe className={styles.frame}
                src={`https://fbfree.lol/series/${id}/`}
                title="Трейлер"
                allow="autoplay; fullscreen"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
        </div>
    )


}
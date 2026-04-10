import { FILM_LABELS } from "shared/constants/i18n";
import styles from './styles.module.css'

type FilmPlayerProps = {
    id: number
}

export const FilmPlayer = ({id}: FilmPlayerProps) => {
    return (
        <div>
            <iframe 
                className={styles.frame}
                src={`https://fbfree.lol/series/${id}/`}
                title={FILM_LABELS.PLAYER_TITLE}
                allow="autoplay; fullscreen"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
        </div>
    )
}
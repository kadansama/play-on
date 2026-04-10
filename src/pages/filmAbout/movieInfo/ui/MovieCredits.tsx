import { memo } from 'react';
import { FILM_LABELS } from 'shared/constants/i18n';
import styles from '../styles.module.css';

interface Person {
    nameRu: string;
}

interface MovieCreditsProps {
    directors?: Person[];
    actors?: Person[];
}

export const MovieCredits = memo(({ directors, actors }: MovieCreditsProps) => {
    const hasContent = (directors?.length ?? 0) > 0 || (actors?.length ?? 0) > 0;
    
    if (!hasContent) return null;

    return (
        <>
            {directors && directors.length > 0 && (
                <p className={styles.directors}>
                    <span className={styles.bigText}>{FILM_LABELS.DIRECTORS} : </span>
                    <span>
                        {directors.map(person => person.nameRu).join(', ')}
                    </span>
                </p>
            )}
            {actors && actors.length > 0 && (
                <p className={styles.actors}>
                    <span className={styles.bigText}>{FILM_LABELS.ACTORS} : </span>
                    <span>
                        {actors.map(actor => actor.nameRu).join(', ')}
                    </span>
                </p>
            )}
        </>
    );
});

MovieCredits.displayName = 'MovieCredits';

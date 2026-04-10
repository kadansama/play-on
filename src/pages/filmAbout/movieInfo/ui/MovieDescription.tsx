import { memo } from 'react';
import { FILM_LABELS } from 'shared/constants/i18n';
import styles from '../styles.module.css';

interface MovieDescriptionProps {
    description?: string;
}

export const MovieDescription = memo(({ description }: MovieDescriptionProps) => {
    if (!description) return null;

    return (
        <p className={styles.description}>
            {description}
        </p>
    );
});

MovieDescription.displayName = 'MovieDescription';

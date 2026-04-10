import { memo } from 'react';
import styles from '../styles.module.css';

interface MovieTrailerLinkProps {
    url?: string;
}

export const MovieTrailerLink = memo(({ url }: MovieTrailerLinkProps) => {
    if (!url) return null;

    return (
        <a 
            className={styles.link} 
            target="_blank" 
            rel="noopener noreferrer"
            href={url}
        >
            Трейлер
        </a>
    );
});

MovieTrailerLink.displayName = 'MovieTrailerLink';

import styles from './styles.module.css'
import { FILM_LABELS } from 'shared/constants/i18n';

interface LogoContentProps {
    logoUrl: string | undefined;
    nameRu: string | undefined;
}

export const LogoContent = ({ logoUrl, nameRu }: LogoContentProps) => {
    if (logoUrl) {
        return (
            <img
                className={styles.img}
                src={logoUrl}
                alt={FILM_LABELS.LOGO_ALT}
                loading="lazy"
                decoding="async"
            />
        );
    }

    if (nameRu) {
        return (
            <h1 className={styles.textFallback}>
                {nameRu}
            </h1>
        );
    }

    return null;
};
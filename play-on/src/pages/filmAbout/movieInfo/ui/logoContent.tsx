import { useMemo } from "react";
import styles from './styles.module.css'

interface ILogoContent {
    logoUrl: string | undefined;
    nameRu: string | undefined;
}
export const LogoContent = ({ logoUrl, nameRu }: ILogoContent) => {
    if (logoUrl) {
        return (
            <img
                className={styles.img}
                src={logoUrl}
                alt="Логотип"
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
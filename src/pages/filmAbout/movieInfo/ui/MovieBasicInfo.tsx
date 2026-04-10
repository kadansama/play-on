import { memo } from 'react';
import clsx from 'clsx';
import styles from '../styles.module.css';

type DetailItem = {
    key: string;
    value: string;
    className: string;
}

interface MovieBasicInfoProps {
    details: DetailItem[];
}

export const MovieBasicInfo = memo(({ details }: MovieBasicInfoProps) => {
    if (details.length === 0) return null;

    return (
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
    );
});

MovieBasicInfo.displayName = 'MovieBasicInfo';

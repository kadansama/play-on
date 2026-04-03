import { Link } from 'react-router-dom';
import styles from './Logo.module.css'
import { memo } from 'react';

type LogoSize = {
    size: 'large' | 'small'
}

export const Logo = memo(({ size }: LogoSize) => {
    return (
       <Link to="/" className={`${styles.logo} ${styles[size]}`}>PlayOn</Link>
    )
})

Logo.displayName = 'Logo';
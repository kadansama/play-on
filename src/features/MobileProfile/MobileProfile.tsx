import { memo } from 'react';
import { Link } from 'shared/ui/Link';
import styles from './styles.module.css';
import { Profile } from 'features/Profile';

export const MobileProfile = memo(() => {
  return (
    <div className={styles.mobileProfile}>
      <Link className={styles.mobileProfile__link} to="/profile" />
      <span className={styles.mobileProfile__label}>Профиль</span>
    </div>
  );
});

MobileProfile.displayName = 'MobileProfile';

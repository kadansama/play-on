import { Link } from 'react-router-dom';
import { RouteConfig } from 'shared/types';
import styles from './styles.module.css';
import { MobileProfile } from 'features/MobileProfile';

interface MobileNavProps {
  routes: RouteConfig[];
  icons: Record<string, string>;
}

export const MobileNav = ({ routes, icons }: MobileNavProps) => {
  return (
    <nav className={styles.mobileNav}>
      {routes.map((route) => (
        <Link
          className={styles.mobileNav__item}
          key={route.mask}
          to={route.mask}
        >
          {icons[route.mask] && (
            <img
              className={styles.mobileNav__icon}
              src={icons[route.mask]}
              alt={route.label}
            />
          )}
          <span className={styles.mobileNav__label}>{route.label}</span>
        </Link>
      ))}
      <MobileProfile/>
    </nav>
  );
};

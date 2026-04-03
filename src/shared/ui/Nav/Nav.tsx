import { Link } from 'react-router-dom'; 
import { RouteConfig } from 'shared/types'; 
import styles from './styles.module.css'

interface NavProps {
  routes: RouteConfig[];
}

export const Nav = ({ routes }: NavProps) => {
  return (
    <nav className={styles.header__nav}>
      {routes.map((route) => (
        <Link className={styles.header__navElem} key={route.mask} to={route.mask}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
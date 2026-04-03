import { SVGProps } from 'react';
import { NavLink } from 'react-router-dom'; 

import styles from './styles.module.css'

export type IconComponent = React.FC<SVGProps<SVGSVGElement>>

export type LinkCardProps = {
  icon: IconComponent;
  title: string;
  to: string; 
}

export const LinkCard = ({ icon: Icon, title, to }: LinkCardProps) => {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => 
        `${styles.card} ${isActive ? styles.active : ""}`
      }
    >
      <div className={styles.wrapper}>
        <Icon className={styles.img} />
        <span className={styles.card__title}>{title}</span>
      </div>
    </NavLink>
  )
}

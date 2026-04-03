import { LinkCard } from './LinkCard/LinkCard';
import { profileData } from './config';
import styles from './styles.module.css';

export const ProfileManagment = () => {
  return (
    <div className={styles.profile}>
      {profileData.map((item) => (
        <LinkCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          to={item.to}
        />
      ))}
    </div>
  );
};

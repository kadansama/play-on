import { Outlet } from 'react-router-dom';
import { ProfileManagment } from 'features/ProfileManagment/ui/ProfileManagment';
import styles from './styles.module.css';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { LeaveProfile } from 'features/LeaveProfile';
import { LeaveProfileWrapper } from 'features/LeaveProfileWrapper';

export const ProfilePage = () => {
  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <ProfileManagment />
      <LeaveProfileWrapper/>
      <Outlet />
    </div>
  );
};

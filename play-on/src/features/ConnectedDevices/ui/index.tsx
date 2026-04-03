import workplaceImg from '@assets/images/watched/workplace.png'
import styles from './styles.module.css'
import { LeaveProfile } from 'features/LeaveProfile';

export const ConnectedDevices = () => {
  return (
    <div className={styles.watched}>
      <div className={styles.watched__info}>
        <h3 className={styles.watched__heading}>Connected devices</h3>
        <p className={styles.watched__paragraph}>Your connected devices will be displayed here (phone / tablet / laptop / TV and others)</p>
        <LeaveProfile/>
      </div>
      <img src={workplaceImg} alt="computer" />
    </div>
  );
};

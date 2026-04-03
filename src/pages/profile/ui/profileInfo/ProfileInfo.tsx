import { EditProfile } from 'features/EditProfile';
import styles from './styles.module.css';
import { mockProfile } from './mock';


export const ProfileInfo = () => {
    const { name, phone } = mockProfile;

    return (
        <div className={styles.info}>
            <div className={styles.info__name}>
                <span className={styles.info__heading}>{name}</span>
                <div className={styles.info__phone}>
                    <span className={styles.info__text}>Main Profile</span>
                    <span className={styles.info__text}>{phone}</span>
                </div>
            </div>
            <EditProfile />
        </div>
    );
};

import { DownloadButton } from './DownloadButton';
import { storeButtons } from './config';
import styles from './styles.module.css';

export const StoreButton = () => {
  return (
    <div className={styles.storeButtons}>
      {storeButtons.map(({ icon: Icon, storeName, url }) => (
        <DownloadButton
          key={url}
          icon={<Icon />} 
          storeName={storeName}
          url={url}
        />
      ))}
    </div>
  );
};
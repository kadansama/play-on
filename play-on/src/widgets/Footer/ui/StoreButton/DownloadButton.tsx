import styles from './styles.module.css'

type StoreButtonProps = {
    icon: React.ReactNode;
    storeName: "App Store" | "Google Play";
    url: "https://play.google.com/store/games" | "https://www.apple.com/store"
}

export const DownloadButton = ({ icon, storeName, url }: StoreButtonProps) => {
    return (
        <a className={styles.downloadBtn} href={url} target="_blank">
            {icon}
            <div className={styles.downloadBtn__info}>
                <span className={styles.downloadBtn__upload}>Upload to</span>
                <span className={styles.downloadBtn__store}>{storeName}</span>
            </div>
        </a>
    )
}
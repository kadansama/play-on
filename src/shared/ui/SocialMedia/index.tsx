
import { socialLinks } from './config'
import styles from './styles.module.css'

export const SocialMedia = () => {
    return (
        <div className={styles.wrapper}>
            {
                socialLinks.map(({ href, Icon }) => (
                    <a className={styles.link} key={href} href={href} target="_blank">
                        <Icon />
                    </a>
                ))
            }
        </div>
    )
}
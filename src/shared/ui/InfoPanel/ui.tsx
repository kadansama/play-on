import { FC } from 'react'
import styles from './styles.module.css'
import { SocialMedia } from '../SocialMedia'

export interface IInfo {
    title: string,
    paragraph: string
}

export const InfoPanel: FC<IInfo> = ({title, paragraph})=>{
    return (
        <div className={styles.panel}>
            <div className={styles.panel__text}>
                <h3 className={styles.panel__heading}>{title}</h3>
                <p className={styles.panel__paragraph}>{paragraph}</p>
            </div>
            <SocialMedia/>
        </div>
    )
}
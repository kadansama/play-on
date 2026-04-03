import { LangSelect } from 'features/LangSelect/ui'
import styles from './styles.module.css'
import { Logo } from 'shared/ui'

export const HelpPanel = ()=>{
    return (
        <div className={styles.panel}>
            <LangSelect useText = {true}/>
            <div className={styles.panel__info}>
                <Logo size='small'/>
                <span className={styles.panel__city}>Los-Angeles</span>
            </div>
        </div>
    )
}
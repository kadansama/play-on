import { Button } from 'shared/ui'
import styles from './styles.module.css'

export const BurgerButton = () => {
    <Button className={styles.btn}>
        <span className={styles.row}></span>
        <span className={styles.row}></span>
        <span className={styles.row}></span>
    </Button>
}
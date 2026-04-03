import { Button } from "shared/ui"
import styles from './styles.module.css'
import { memo } from "react"
export const Notification = memo(()=>{
    return (
        <Button className={styles.btn} onClick={()=>{}}>
            
        </Button>
    )
})
import { Box } from "@mui/material"
import styles from './styles.module.css'
import { Button } from "shared/ui"

export const OpenBtn = ({ onClick }) => {
    return (
        <Box className={styles.search__wrapper}>
            <Button onClick={() => { }} className={styles.searchBtn}>

            </Button>

            <Box className={styles.search__box}>
                <input className={styles.search__input} type="text" placeholder="Movie/series name or actor/director name"/>
                <Button onClick={onClick} className={styles.cross}/>
            </Box>
        </Box>

    )
}
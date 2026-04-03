import { memo } from "react"
import { Box } from "@mui/material"
import { Link } from "shared/ui/Link"

import styles from './styles.module.css'


export const Profile = memo(() => {
    return (
        <Box className={styles.profile}>
            <Link className={styles.profile__link} to="/profile"></Link>
        </Box>
    )
})
import { memo } from "react"
import { Box } from "@mui/material"

import { Link } from "shared/ui/Link"
import { footerLinks } from "./config"
import styles from './styles.module.css'


export const FooterLinks = memo(() => {
    return (
        <Box className={styles.footerLinks}>
            {footerLinks.map((link) => (
                <Link
                    className={styles.footerLinks__link}
                    key={link.label}
                    to={link.path}
                >
                    {link.label}
                </Link>
            ))}
        </Box>
    )
})
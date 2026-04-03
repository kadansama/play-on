import { Box } from "@mui/material"
import { Logo } from "shared/ui/Logo"
import { Nav } from "../../../../shared/ui/Nav"
import styles from './styles.module.css'
import { memo } from "react"

interface HeaderMainProps {
  routes: any[];
  isNavOpen: boolean;
}

export const HeaderMain = memo(({ routes, isNavOpen }: HeaderMainProps) => {
  return (
    <Box className={styles.header__info}>
      <Logo size={'large'} />
      <Box className={`${styles.navWrapper} ${isNavOpen ? styles.hidden : ""}`}>
        <Nav routes={routes} />
      </Box>
    </Box>
  )
})


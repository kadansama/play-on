import { Box, useMediaQuery } from "@mui/material"
import { Logo } from "shared/ui/Logo"
import { Nav } from "../../../../shared/ui/Nav"
import styles from './styles.module.css'
import { memo } from "react"

interface HeaderMainProps {
  routes: any[];
  isNavOpen: boolean;
}

export const HeaderMain = memo(({ routes, isNavOpen }: HeaderMainProps) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const headerInfoClass = `${styles.header__info} ${isMobile && isNavOpen ? styles.centered : ''}`;
  
  return (
    <Box className={headerInfoClass}>
      <Logo size={'large'} />
      {isDesktop && (
        <Box className={`${styles.navWrapper} ${isNavOpen ? styles.hidden : ""}`}>
          <Nav routes={routes} />
        </Box>
      )}
    </Box>
  )
})


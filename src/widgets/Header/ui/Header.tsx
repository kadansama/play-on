import { memo } from "react"
import { Container } from "shared/ui/Container"
import { Box, useMediaQuery } from "@mui/material"
import { DesktopHeader } from "./DesktopHeader"
import styles from './styles.module.css'
import { RouteConfig } from "shared/types"


type HeaderProps = {
  routes: RouteConfig[];
}

export const Header = memo(({ routes }: HeaderProps) => {
  return (
    <Box component="header" className={styles.header}>
      <Container>
        <Box className={styles.header__wrapper}>
          <DesktopHeader routes={routes} />
        </Box>
      </Container>
    </Box>
  )
})

Header.displayName = 'Header'
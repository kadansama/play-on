// import { memo, useCallback, useMemo, useState } from "react"
// import { Container } from "shared/ui/Container"
// import { Box } from "@mui/material"
// import styles from './styles.module.css'
// import { HeaderMain } from "./HeaderMain"
// import { HeaderAction } from "./HeaderAction"
// import { RouteConfig } from "shared/types"

// type HeaderProps = {
//   routes: RouteConfig[];
// }

// export const Header = memo(({ routes }: HeaderProps) => {
//     const [open, setOpen] = useState(false)
    
//     const toggleSearch = useCallback(() => {
//         setOpen(prev => !prev)
//     }, [])
    
//     const memoizedHeaderMain = useMemo(() => (
//         <HeaderMain routes={routes} isNavOpen={open} />
//     ), [routes, open])
    
//     return (
//         <Box component="header" className={styles.header}>
//             <Container>
//                 <Box className={styles.header__wrapper}>
//                     {memoizedHeaderMain}
//                     <HeaderAction isOpen={open} onToggleSearch={toggleSearch}/>
//                 </Box>
//             </Container>
//         </Box>
//     )
// })

// Header.displayName = 'Header'

import { memo } from "react"
import { Container } from "shared/ui/Container"
import { Box, useMediaQuery } from "@mui/material"
import { DesktopHeader } from "./DesktopHeader"
import { MobileHeader } from "./MobileHeader"
import styles from './styles.module.css'
import { RouteConfig } from "shared/types"


type HeaderProps = {
  routes: RouteConfig[];
}

export const Header = memo(({ routes }: HeaderProps) => {
    const isMobile = useMediaQuery('(max-width: 1024px)')
    return (
        <Box component="header" className={styles.header}>
            <Container>
                <Box className={styles.header__wrapper}>
                  {isMobile ? (
                    <MobileHeader routes={routes} />
                  ) : (
                    <DesktopHeader routes={routes} />
                  )}
                </Box>
            </Container>
        </Box>
    )
})

Header.displayName = 'Header'
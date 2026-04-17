import { memo, useState, useCallback, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useMediaQuery } from "@mui/material"

import { HeaderMain } from "../HeaderMain"
import { HeaderAction } from "../HeaderAction"
import styles from './styles.module.css'
import { RouteConfig } from "shared/types"

interface DesktopHeaderProps {
  routes: RouteConfig[];
}

export const DesktopHeader = memo(({ routes }: DesktopHeaderProps) => {
    const [isSearchOpen, setSearchOpen] = useState(false)
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width: 768px)');
    
    useEffect(() => {
        setSearchOpen(false)
      }, [location.pathname]);
    
    const toggleSearch = useCallback(() => {
        setSearchOpen(prev => !prev)
    }, [])
    
    const headerClass = `${styles.desktopHeader} ${isMobile && isSearchOpen ? styles.desktopHeader__mobile : ''}`;
    
    return (
        <div className={headerClass}>
            <HeaderMain routes={routes} isNavOpen={isSearchOpen} />
            <HeaderAction isOpen={isSearchOpen} onToggleSearch={toggleSearch} />
            {isSearchOpen && (
                <div 
                    className={styles.searchOverlay}
                    onClick={toggleSearch}
                    role="button"
                    tabIndex={0}
                    aria-label="Закрыть поиск"
                />
            )}
        </div>
    )
})
import { memo, useState, useCallback, useEffect } from "react"
import { useLocation } from "react-router-dom" 

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
     useEffect(() => {
        setSearchOpen(false)
      }, [location.pathname]);
    
    const toggleSearch = useCallback(() => {
        setSearchOpen(prev => !prev)
    }, [])
    
    return (
        <div className={styles.desktopHeader}>
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
import { memo, useState, useCallback } from "react"
import { HeaderMain } from "../HeaderMain"
import { HeaderAction } from "../HeaderAction"
import styles from './styles.module.css'
import { RouteConfig } from "shared/types"

interface DesktopHeaderProps {
  routes: RouteConfig[];
}

export const DesktopHeader = memo(({ routes }: DesktopHeaderProps) => {
    const [isSearchOpen, setSearchOpen] = useState(false)
    
    const toggleSearch = useCallback(() => {
        setSearchOpen(prev => !prev)
    }, [])
    
    return (
        <div className={styles.desktopHeader}>
            <HeaderMain routes={routes} isNavOpen={isSearchOpen} />
            <HeaderAction isOpen={isSearchOpen} onToggleSearch={toggleSearch} />
        </div>
    )
})
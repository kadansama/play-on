import { SearchInput } from "features/SearchInput/ui/searchInput";
import { Button } from "shared/ui"

import styles from './styles.module.css'

export const OpenBtn = ({ onClick }: {onClick: ()=>void}) => {
    return (
        <div className={styles.search__wrapper}>
            <Button onClick={() => { }} className={styles.searchBtn}/>
            <SearchInput onClick={onClick}/>
        </div>

    )
}
import { SearchContent } from "features/SearchInput/ui/searchContent"
import { Button } from "shared/ui"
import { useMovieSearch } from "../config/useMovieSearch"

import styles from './styles.module.css'




export const SearchInput = ({ onClick }: { onClick: () => void }) => {
   const { searchTerm, setSearchTerm, results, isSearching, hasSearched } = useMovieSearch(300);
    return (
        <>
            <div className={styles.search__box}>
                <input 
                    className={styles.search__input} 
                    type="text" 
                    placeholder="Что хотите посмотреть?"
                    aria-label="Поиск фильма или актера" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <Button 
                    onClick={onClick} 
                    className={styles.cross}
                    aria-label="Закрыть поиск"
                    aria-pressed={false}
                />
            </div>
            <SearchContent data={results} isSearching={isSearching} hasSearched={hasSearched}/>
        </>

    )
}
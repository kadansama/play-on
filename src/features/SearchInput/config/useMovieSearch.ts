import { useState, useEffect, useMemo } from 'react';
import { useDebounce } from 'use-debounce';

import { KeyWordSeach, ShortKeyFilm } from 'entities/keywordSearch';

const movie = new KeyWordSeach();

export const useMovieSearch = (delay: number = 300) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<ShortKeyFilm[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [debouncedSearchTerm] = useDebounce(searchTerm, delay);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        const search = async () => {
            if (!debouncedSearchTerm?.trim()) {
                setHasSearched(false);
                return;
            }

            setHasSearched(true);
            setIsSearching(true);
            try {
                const data = await movie.searchByKeyword(debouncedSearchTerm);
                // console.log(data);
                setResults(data.films);
            } catch (error) {
                console.error('Search error:', error);
                setResults([]);
            } finally {
                setIsSearching(false);
            }
        };

        search();
    }, [debouncedSearchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        results,
        isSearching,
        hasSearched
    };
};
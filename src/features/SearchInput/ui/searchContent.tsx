import { memo, useEffect, useMemo, useState } from 'react'

import { ShortKeyFilm } from 'entities/keywordSearch'
import { SEARCH_MESSAGES } from 'shared/constants/i18n'

import styles from './styles.module.css'
import { Container } from 'shared/ui'
import { FilmCarousel } from 'widgets/FilmCarousel'
import { FilmPreview } from 'entities/filmCollection/types'



interface SearchContentProps {
    data: ShortKeyFilm[] | undefined
    isSearching: boolean
    hasSearched: boolean
}

export const SearchContent = memo(({ data, isSearching, hasSearched }: SearchContentProps) => {
    const [heading, setHeading] = useState<string>(SEARCH_MESSAGES.ENTER_QUERY);

    const transformedData = useMemo<FilmPreview[]>(() => {
        if (!data || !Array.isArray(data)) return []; 

        return data.map((item): FilmPreview => ({
            kinopoiskId: item.id,
            posterUrl: item.posterUrl || item.posterUrlPreview || undefined
        }));
    }, [data]);

    useEffect(() => {
        if (isSearching) {
            setHeading(SEARCH_MESSAGES.SEARCHING);
        } else if (!hasSearched) {
            setHeading(SEARCH_MESSAGES.ENTER_QUERY);
        } else if (!data || data.length === 0) {
            setHeading(SEARCH_MESSAGES.NO_RESULTS);
        } else {
            setHeading(SEARCH_MESSAGES.SEARCH_RESULTS);
        }
    }, [data, isSearching, hasSearched]);

    return (
        <div className={styles.search__content}>
            <Container>
                <div className={styles.search__wrapper}>
                    <h3 className={styles.search__heading} aria-live="polite" aria-atomic="true">{heading}</h3>
                    <FilmCarousel films={transformedData ?? []} title="" />
                </div>
            </Container>
        </div>
    )
})
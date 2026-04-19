import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router';
import { useFilmTopQuery } from 'entities/collections/api/filmTopQueries';
import { CollectionType } from 'entities/collections/types';
import { FilmPreview } from 'entities/filmCollection/types';
import { useInfiniteScroll } from 'features/Filters/model/useInfiniteScroll';
import { FilmList } from 'shared/ui/FilmList';
import { InfoPanel } from 'shared/ui/InfoPanel';
import { routesMasks } from 'shared/config/routesMasks';
import { HookMapItem, hookMap } from '../config';
import styles from './styles.module.css';

const collections = Object.entries(hookMap) as [CollectionType, HookMapItem][];

export const TopCollectionPage = () => {
    const { collection } = useParams();
    const collectionEntry = collections.find(([, item]) => item.slug === collection);
    const activeEntry = collectionEntry ?? collections[0];
    const [activeCollectionType, activeCollection] = activeEntry;
    const [page, setPage] = useState(1);
    const [films, setFilms] = useState<FilmPreview[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const filmsQuery = useFilmTopQuery({ type: activeCollectionType, page });
    const isLoadingRef = useRef(filmsQuery.isLoading);
    const hasMoreRef = useRef(hasMore);

    useEffect(() => {
        isLoadingRef.current = filmsQuery.isLoading;
    }, [filmsQuery.isLoading]);

    useEffect(() => {
        hasMoreRef.current = hasMore;
    }, [hasMore]);

    useEffect(() => {
        setPage(1);
        setFilms([]);
        setHasMore(true);
    }, [activeCollectionType]);

    useEffect(() => {
        if (!filmsQuery.data) return;

        setFilms((prev) => {
            const merged = page === 1 ? filmsQuery.data : [...prev, ...filmsQuery.data];

            return merged.filter(
                (film, index, self) =>
                    index === self.findIndex((item) => item.kinopoiskId === film.kinopoiskId)
            );
        });

        if (filmsQuery.data.length === 0) {
            setHasMore(false);
        }
    }, [filmsQuery.data, page]);

    const loadMore = useCallback(() => {
        if (!isLoadingRef.current && hasMoreRef.current) {
            setPage((currentPage) => currentPage + 1);
        }
    }, []);

    useInfiniteScroll({
        onLoad: loadMore,
        isLoading: filmsQuery.isLoading,
        hasMore,
    });

    if (!collectionEntry) {
        return <Navigate to={routesMasks.top.create()} replace />
    }

    return (
        <section className={styles.topPage}>
            <InfoPanel title={activeCollection.info.title} paragraph={activeCollection.info.paragraph} />
            <FilmList list={films} />
        </section>
    )
}

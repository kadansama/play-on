import { UseQueryResult } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";

import { FilmPreview, Filtered } from "entities/filmCollection/types";



export type UpdateFilters = (update: Partial<Filtered>) => UseQueryResult<FilmPreview[], Error>;

export const usePagination = (queryFunc: UpdateFilters, filters: Filtered) => {
    const [filmArr, setFilmArr] = useState<FilmPreview[]>([]);
    const [pages, setPages] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const { data, isLoading } = queryFunc({ ...filters, page: pages })

    const isLoadingRef = useRef(isLoading);
    const hasMoreRef = useRef(hasMore);

    useEffect(() => {
        isLoadingRef.current = isLoading;
    }, [isLoading]);

    useEffect(() => {
        hasMoreRef.current = hasMore;
    }, [hasMore]);

    const resetPagination = useCallback(() => {
        setPages(1);
        setFilmArr([]);
        setHasMore(true);
    }, []);

    useEffect(() => {
        if (!data) return;

        setFilmArr(prev => {
            const merged = [...prev, ...data];
            const unique = merged.filter(
                (film, index, self) =>
                    index === self.findIndex(f => f.kinopoiskId === film.kinopoiskId)
            );
            return unique;
        });

        if (Array.isArray(data) && data.length === 0) {
            setHasMore(false);
        }
    }, [data]);

    const onLoad = useCallback(() => {
        if (!isLoadingRef.current && hasMoreRef.current) {
            setPages(p => p + 1);
        }
    }, [])

    return {
        data: filmArr,
        isLoading,
        filters,
        resetPagination,
        onLoad,
        hasMore,
        page: pages,
    };
}


import { useFilmQuery } from "entities/film/model/queries";
import { useMemo } from "react";

export const formatDuration = (minutes?: number): string | null => {
    if (!minutes) return null;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}:${mins}` : `0:${mins}`;
};

export const useMovieDetails = (id: number) => {
    const { data, isError, isLoading } = useFilmQuery(id);
    
    const details = useMemo(() => {
        if (!data) return [];
        
        const items: any = [];
        if (data.ratingKinopoisk) {
            items.push({
                key: 'rating',
                value: data.ratingKinopoisk.toFixed(1),
                className: 'wrapper__rating'
            });
        }
        if (data.year) {
            items.push({
                key: 'year',
                value: data.year,
                className: 'wrapper__year'
            });
        }
        if (data.genres?.[0]?.genre) {
            items.push({
                key: 'genre',
                value: data.genres[0].genre,
                className: 'wrapper__genre'
            });
        }
        if (data.filmLength) {
            items.push({
                key: 'length',
                value: formatDuration(data.filmLength),
                className: 'wrapper__length'
            });
        }
        if (data.ratingAgeLimits && data.ratingAgeLimits != "undefined+") {
            items.push({
                key: 'ageLimit',
                value: `${data.ratingAgeLimits}`,
                className: 'wrapper__ageLimit'
            });
        }
        
        return items;
    }, [data]);
    
    return {
        details,
        isLoading,
        isError,
        hasData: !!data,
        data
    };
};

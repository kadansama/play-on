import { Filtered } from "entities/filmCollection/types";
import { useCallback, useState } from "react";

export const useFilterState = () => {
    const [filters, setFilters] = useState<Filtered>({
        yearFrom: 1000,
        yearTo: 3000,
        genres: [],
        countries: [],
    });

    const updateFilters = useCallback((newPart: Partial<Filtered>) => {
        setFilters(prev => ({ ...prev, ...newPart }));
    }, []);
    return {
        filters,
        setFilters: updateFilters,
    };
}
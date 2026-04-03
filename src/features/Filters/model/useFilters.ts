

import { FilmPreview, Filtered } from "entities/filmCollection/types";

import { useInfiniteScroll } from "./useInfiniteScroll";
import { UpdateFilters, usePagination } from "./usePagination";
import { useFilterState } from "./useFilterState";
import { useFilterUrl } from "./useFilterUrl";

export const useFilters = (queryFunc: UpdateFilters) => {
  const { filters, setFilters } = useFilterState()
  const {
    data,
    isLoading,
    hasMore,
    onLoad,
    resetPagination,
    page: pages
  } = usePagination(queryFunc, filters)

  useFilterUrl(filters, setFilters)

  const updateFilters = (newPart: Partial<Filtered>) => {
    setFilters(newPart);
    resetPagination()
  };

  useInfiniteScroll({ onLoad, isLoading, hasMore, });

  return {
    data,
    isLoading,
    filters,
    setFilters: updateFilters,
    loadMore: onLoad,
    hasMore,
    page: pages,
  };
};
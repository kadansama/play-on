import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { filmFiltersApi } from './filmFilters'
import { Country, FilmPreview, Filtered, Genre } from '../types'
import { FIVE_MIN } from 'shared/api/queryTimes'

export const useGenreIdsQuery = () =>
  useQuery<Genre[], Error>({
    queryKey: ['filters', 'genreIds'],
    queryFn: () => filmFiltersApi.getGenreIds(),
  })

export const useCountryIdsQuery = () =>
  useQuery<Country[], Error>({
    queryKey: ['filters', 'countryIds'],
    queryFn: () => filmFiltersApi.getCountryIds(),
  })

// Helper для queryKey поиска (динамические фильтры, НЕ кэшируются)
const makeSearchFiltersQueryKey = (filters: Filtered) => {
  const { countries, genres, order, type, ratingFrom, ratingTo, yearFrom, yearTo, imdbId, keyword, page } = filters;
  return ['search', 'filtered', { countries, genres, order, type, ratingFrom, ratingTo, yearFrom, yearTo, imdbId, keyword, page }];
};

// Helper для queryKey коллекций (фиксированные коллекции, КЭШИРУЮТСЯ в IndexedDB)
// Включаем page - но в persister будет проверка что кэшируется только page 1
const makeCollectionQueryKey = (filters: Filtered) => {
  const { countries, genres, order, type, ratingFrom, ratingTo, yearFrom, yearTo, imdbId, keyword, page } = filters;
  return ['collections', { countries, genres, order, type, ratingFrom, ratingTo, yearFrom, yearTo, imdbId, keyword, page }];
};
  
// Динамический поиск по фильтрам - только RAM
export const useFilmsWithFiltersQuery = (filters: Filtered) =>
  useQuery<FilmPreview[], Error>({
    queryKey: makeSearchFiltersQueryKey(filters),
    queryFn: () => filmFiltersApi.getFilmsWithFilters(filters),
    staleTime: 0,
    gcTime: FIVE_MIN,
  })


export const useCachedFilmsQuery = (filters: Filtered) => {
  return useQuery<FilmPreview[], Error>({
    queryKey: makeCollectionQueryKey(filters),
    queryFn: () => filmFiltersApi.getFilmsWithFilters(filters),
  });
};

export const useMovieFilters = (filters: Filtered) => {
  return useCachedFilmsQuery({ type: "FILM", ...filters });
};

export const useSerialFilters = (filters: Filtered) =>{
  return useCachedFilmsQuery({type: "TV_SERIES", ...filters});
}
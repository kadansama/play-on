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
  
export const useFilmsWithFiltersQuery = (filters: Filtered) =>
  useQuery<FilmPreview[], Error>({
    queryKey: ['films', 'filtered', filters],
    queryFn: () => filmFiltersApi.getFilmsWithFilters(filters),
  })

export const useCachedFilmsQuery = (filters: Filtered) => {
  return useQuery<FilmPreview[], Error>({
    queryKey: ['films', filters],
    queryFn: () => filmFiltersApi.getFilmsWithFilters(filters),
    staleTime: 0, 
    gcTime: FIVE_MIN, 
  });
};

export const useMovieFilters = (filters: Filtered) => {
  return useCachedFilmsQuery({ type: "FILM", ...filters });
};

export const useSerialFilters = (filters: Filtered) =>{
  return useCachedFilmsQuery({type: "TV_SERIES", ...filters});
}
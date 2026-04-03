import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { FilmTop } from './filmTop';
import { FilmPreview, CollectionParams } from '../types';

export const useFilmTopQuery = (params: CollectionParams) =>
  useQuery<FilmPreview[], Error>({
    queryKey: ['top', params.type, params.page],
    queryFn: () => new FilmTop().getCollections(params),
    keepPreviousData: true,
  } as UseQueryOptions<FilmPreview[], Error>);
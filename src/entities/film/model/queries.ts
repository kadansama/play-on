import { useQuery } from '@tanstack/react-query'

import { Movie, SimularMovieItem, StaffPerson, Trailer } from '../types'
import { FilmWrap } from './film.service'
import { filmQueryConfig } from 'shared/api'

const useFilmBaseQuery = <T>(
  id: number,
  key: string,
  queryFn: (film: FilmWrap) => Promise<T>,
  config?: any
) => {
  const film = new FilmWrap(id)
  return useQuery<T, Error>({
    queryKey: ['film', id, key],
    queryFn: () => queryFn(film),
    ...config,
  })
}

export const useFilmQuery = (id: number) =>
  useFilmBaseQuery<Movie>(id, 'data', film => film.getMovieInfo(), filmQueryConfig) 

export const useFilmTrailerQuery = (id: number) =>
  useFilmBaseQuery<Trailer | null>(id, 'trailer', film => film.getTrailer(), filmQueryConfig) 

export const useFilmStaffByRoleQuery = (
  id: number,
  role: string,
  limit: number
) => {
  return useQuery<{ nameEn: string; nameRu: string }[], Error>({
    queryKey: ['film', id, role],
    queryFn: async () => {
      const film = new FilmWrap(id)
      return film.getStaffByRole(role, limit)
    },
    ... filmQueryConfig
  })
}

export const useFilmDirectorsQuery = (id: number) =>
  useFilmStaffByRoleQuery(id, 'DIRECTOR', 3)

export const useFilmActorsQuery = (id: number) =>
  useFilmStaffByRoleQuery(id, 'ACTOR', 6)

export const useSimularMovieQuery = (id: number) => 
  useFilmBaseQuery<SimularMovieItem[] | null>(id, 'simular', film => film.getSimularMovies(), filmQueryConfig)

import { useQueries } from '@tanstack/react-query'
import { Movie, SimularMovieItem } from '../types'
import { FilmWrap } from './film.service'
import { filmQueryConfig } from 'shared/api'
import { filmAboutKeys } from './queryKeys'

interface FilmAboutData {
  movieInfo: Movie | undefined
  actors: { nameEn: string; nameRu: string }[] | undefined
  directors: { nameEn: string; nameRu: string }[] | undefined
  trailer: any | undefined
  similar: SimularMovieItem[] | null | undefined
  isLoading: boolean
  isError: boolean
  error: Error | null
}

/**
 * Объединенный hook для получения всех данных о фильме
 * Группирует 5 запросов в один для удобства в React Query DevTools
 */
export const useFilmAboutData = (id: number): FilmAboutData => {
  const film = new FilmWrap(id)

  const results = useQueries({
    queries: [
      {
        queryKey: filmAboutKeys.movieInfo(id),
        queryFn: () => film.getMovieInfo(),
        ...filmQueryConfig,
      },
      {
        queryKey: filmAboutKeys.actors(id),
        queryFn: () => film.getStaffByRole('ACTOR', 6),
        ...filmQueryConfig,
      },
      {
        queryKey: filmAboutKeys.directors(id),
        queryFn: () => film.getStaffByRole('DIRECTOR', 3),
        ...filmQueryConfig,
      },
      {
        queryKey: filmAboutKeys.trailer(id),
        queryFn: () => film.getTrailer(),
        ...filmQueryConfig,
      },
      {
        queryKey: filmAboutKeys.similar(id),
        queryFn: () => film.getSimularMovies(),
        ...filmQueryConfig,
      },
    ],
  })

  const [movieInfoQuery, actorsQuery, directorsQuery, trailerQuery, similarQuery] = results

  return {
    movieInfo: movieInfoQuery.data,
    actors: actorsQuery.data,
    directors: directorsQuery.data,
    trailer: trailerQuery.data,
    similar: similarQuery.data,
    isLoading: results.some(query => query.isLoading),
    isError: results.some(query => query.isError),
    error: results.find(query => query.error)?.error || null,
  }
}

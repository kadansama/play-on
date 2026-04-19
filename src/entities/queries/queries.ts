import { useFilmTopQuery } from "entities/collections/api/filmTopQueries";
import { useFilmsWithFiltersQuery } from "entities/filmCollection/api/filmFilterQueries";

export const usePopularFilms = () => 
  useFilmTopQuery({ type: 'TOP_POPULAR_ALL' });

export const useOscarWinners = () => 
  useFilmTopQuery({ type: 'OSKAR_WINNERS_2021' });

export const useMoviesCollection = () => 
  useFilmsWithFiltersQuery({ type: 'FILM' });

export const useSeriesCollection = () => 
  useFilmsWithFiltersQuery({ type: "MINI_SERIES" });

export const useCartoonsCollection = () => 
  useFilmsWithFiltersQuery({ genres: [18] });

export const useTopTvShows = ()=>
  useFilmTopQuery({type: 'TOP_250_TV_SHOWS'})
export const useTopMovies = ()=>
  useFilmTopQuery({type: 'TOP_250_MOVIES'})
export const useTopVampire = ()=>
  useFilmTopQuery({type: 'VAMPIRE_THEME'})
export const useTopComics = ()=>
  useFilmTopQuery({type: 'COMICS_THEME'})
export const useTopReleases = ()=>
  useFilmTopQuery({type: 'CLOSES_RELEASES'})
export const useTopLove = ()=>
  useFilmTopQuery({type: 'LOVE_THEME'})
export const useTopZombie = ()=>
  useFilmTopQuery({type: 'ZOMBIE_THEME'})
export const useCatastrophe = ()=>
  useFilmTopQuery({type: 'CATASTROPHE_THEME'})
export const useKids = ()=>
  useFilmTopQuery({type: 'KIDS_ANIMATION_THEME'})
export const useTopFamily = ()=>
  useFilmTopQuery({type: 'FAMILY'})

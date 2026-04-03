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
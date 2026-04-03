import { useFilmsWithFiltersQuery } from "entities/filmCollection/api/filmFilterQueries";
import { FilmCarousel } from "widgets/FilmCarousel";
import { FilmHeroCarousel } from "widgets/FilmHeroCarousel/ui/FilmHeroCarousel";
import { Container } from "shared/ui";

import styles from './styles.module.css'
import { useFilmTopQuery } from "entities/collections/api/filmTopQueries";
import { useCartoonsCollection, useMoviesCollection, useOscarWinners, usePopularFilms, useSeriesCollection } from "entities/queries";
import { SelectNav } from "features/SelectNav/SelectNav";

export const HomePage = () => {

  const filmsQuery = useMoviesCollection();
  const cartoonsQuery = useCartoonsCollection();
  const seriesQuery = useSeriesCollection();
  const oscarWinnersQuery = useOscarWinners();
  const topPopularQuery = usePopularFilms();

  return (
    <>
      <FilmHeroCarousel films={topPopularQuery.data ?? []} />
      <Container>
        <div className={styles.wrapper}>
          <SelectNav></SelectNav>
          <FilmCarousel films={filmsQuery.data ?? []} title="Movies" />
          <FilmCarousel films={seriesQuery.data ?? []} title="Series" />
          <FilmCarousel films={cartoonsQuery.data ?? []} title="Cartoons" />
          <FilmCarousel films={oscarWinnersQuery.data ?? []} title="Oskar winners" />

        </div>
      </Container>
    </>
  );
};


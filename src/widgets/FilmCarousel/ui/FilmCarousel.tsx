import { memo, useMemo } from "react";
import { CarouselBase } from "shared/ui/CarouselBase";
import { MovieCard } from "shared/ui/MovieCard/MovieCard";
import { FilmPreview } from "entities/filmCollection/types";
import styles from "./styles.module.css";
import { settings } from "../config";

type FilmCarouselProps = {
  films: FilmPreview[];
  title: string;
};

export const FilmCarousel = memo(({ films, title }: FilmCarouselProps) => {
  const slides =
    films.map((film) => (
      <div key={film.kinopoiskId} className={styles.carousel__film}>
        <MovieCard id={film.kinopoiskId} src={film.posterUrl} />
      </div>
    ))



  return (
    <div className={styles.carousel__wrapper}>
      <h2 className={styles.carousel__heading}>{title}</h2>
      <CarouselBase settings={settings}>{slides}</CarouselBase>
    </div>
  );
});


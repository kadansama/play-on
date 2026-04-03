import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { memo } from "react";

import { CarouselBase } from "shared/ui/CarouselBase";
import { MovieCard } from "shared/ui/MovieCard/MovieCard";
import { FilmPreview } from "entities/filmCollection/types";
import { heroSettings } from "../config";
import { useFilmHeroCarousel } from "../model";

import styles from "./styles.module.css";

type FilmHeroCarouselProps = {
  films: FilmPreview[];
};

export const FilmHeroCarousel = memo(({ films }: FilmHeroCarouselProps) => {
  const { slides, setCenterIndex } = useFilmHeroCarousel(films);
  //  console.log("Ререндер компонента")
  return (
    <div className={styles.carousel__wrapper}>
      <CarouselBase settings={{ ...heroSettings, afterChange: (current) => setCenterIndex(current) }}>
        {slides.map(({ film, style, innerStyle, cls }) => (
          <div key={film.kinopoiskId} className={cls} style={style}>
            <div className={styles.carousel__filmInner} style={innerStyle}>
              <MovieCard id={film.kinopoiskId} src={film.posterUrl} />
            </div>
          </div>
        ))}
      </CarouselBase>
    </div>
  );
});

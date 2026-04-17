import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { memo, useMemo } from "react";
import { useMediaQuery } from "@mui/material";

import { CarouselBase } from "shared/ui/CarouselBase";
import { MovieCard } from "shared/ui/MovieCard/MovieCard";
import { FilmPreview } from "entities/filmCollection/types";
import { CustomArrow } from "../ui/CustomArrow/CustomArrow";
import { useFilmHeroCarousel } from "../model";

import styles from "./styles.module.css";

type FilmHeroCarouselProps = {
  films: FilmPreview[];
};

export const FilmHeroCarousel = memo(({ films }: FilmHeroCarouselProps) => {
  const { slides, setCenterIndex } = useFilmHeroCarousel(films);
  
  const isLargeScreen = useMediaQuery('(min-width: 900px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 899px)');
  const isSmallScreen = useMediaQuery('(max-width: 767px)');

  // Создаем settings в зависимости от текущего breakpoint
  const heroSettings = useMemo(() => {
    let slidesToShow = 3;
    let arrows = true;

    if (isSmallScreen) {
      slidesToShow = 1;
      arrows = false;
    } else if (isMediumScreen) {
      slidesToShow = 2;
      arrows = false;
    }

    return {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow,
      slidesToScroll: 1,
      arrows,
      nextArrow: <CustomArrow direction="right"/>,
      prevArrow: <CustomArrow direction="left"/>,
      centerMode: true,
      variableWidth: true,
      afterChange: (current: number) => setCenterIndex(current),
    };
  }, [isLargeScreen, isMediumScreen, isSmallScreen, setCenterIndex]);

  return (
    <div className={styles.carousel__wrapper}>
      <CarouselBase settings={heroSettings}>
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

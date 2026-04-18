import { memo, useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { CarouselBase } from "shared/ui/CarouselBase";
import { MovieCard } from "shared/ui/MovieCard/MovieCard";
import { FilmPreview } from "entities/filmCollection/types";
import styles from "./styles.module.css";
import { OrdinaryArrow } from "../ui/OrdinaryArrow";

type FilmCarouselProps = {
  films: FilmPreview[];
  title: string;
};

export const FilmCarousel = memo(({ films, title }: FilmCarouselProps) => {
  const isLargeScreen = useMediaQuery('(min-width: 900px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 899px)');
  const isSmallScreen = useMediaQuery('(max-width: 767px)');


  const settings = useMemo(() => {
    let slidesToShow = 6;
    let slidesToScroll = 3;
    let arrows = true;

    if (isSmallScreen) {
      slidesToShow = 3;
      arrows = false;
    } else if (isMediumScreen) {
      slidesToShow = 5;
      arrows = false;
    }

    return {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow,
      slidesToScroll,
      arrows,
      nextArrow: <OrdinaryArrow direction="right" />,
      prevArrow: <OrdinaryArrow direction="left" />,
      centerMode: false,
      centerPadding: "50px",
    };
  }, [isLargeScreen, isMediumScreen, isSmallScreen]);

  const slides = useMemo(() =>
    films.map((film) => (
      <div key={film.kinopoiskId} className={styles.carousel__film}>
        <MovieCard id={film.kinopoiskId} src={film?.posterUrl} />
      </div>
    )),
    [films]
  );

  return (
    <div className={styles.carousel__wrapper}>
      <h2 className={styles.carousel__heading}>{title}</h2>
      <CarouselBase settings={settings}>{slides}</CarouselBase>
    </div>
  );
});


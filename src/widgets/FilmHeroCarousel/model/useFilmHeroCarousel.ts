import { useMemo, useState, useEffect } from "react";
import { FilmPreview } from "entities/filmCollection/types";
import styles from "../ui/styles.module.css";

export function useFilmHeroCarousel(films: FilmPreview[]) {
  const [centerIndex, setCenterIndex] = useState(0);
  const [viewportScale, setViewportScale] = useState(window.innerWidth / 1600);

  useEffect(() => {
    const handleResize = () => setViewportScale(window.innerWidth / 1600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseCenterWidth = 407 * viewportScale + 30;
  const baseCenterHeight = 617 * viewportScale;

  const slides = useMemo(
    () =>
      films.map((film, index) => {
        const rawDiff = Math.abs(index - centerIndex);
        const dist = Math.min(rawDiff, films.length - rawDiff);
        const scaleMap = Math.max(0, 1 - dist * 0.14);

        const cls =
          dist === 0
            ? `${styles.carousel__film} ${styles["carousel__film--center"]}`
            : dist === 1
            ? `${styles.carousel__film} ${styles["carousel__film--adjacent"]}`
            : `${styles.carousel__film} ${styles["carousel__film--far"]}`;

        return {
          film,
          style: { width: baseCenterWidth, height: baseCenterHeight },
          innerStyle: { transform: `scale(${scaleMap})` },
          cls,
        };
      }),
    [films, centerIndex, viewportScale]
  );

  return {
    slides,
    centerIndex,
    setCenterIndex,
  };
}

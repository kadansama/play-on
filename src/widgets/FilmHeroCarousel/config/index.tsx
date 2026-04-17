// widgets/filmHeroCarousel/config.tsx
import { ArrowBtn } from "shared/ui/ArrowBtn";
import { CustomArrow } from "../ui/CustomArrow/CustomArrow";


export const heroSettings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <CustomArrow  direction="right"/>,
  prevArrow: <CustomArrow  direction="left"/>,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
};

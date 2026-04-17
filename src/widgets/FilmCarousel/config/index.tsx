import { OrdinaryArrow } from '../ui/OrdinaryArrow';

export const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 2,
  arrows: true,
  nextArrow: <OrdinaryArrow direction="right" />,
  prevArrow: <OrdinaryArrow direction="left" />,
  centerMode: false,
  centerPadding: "50px",
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
};
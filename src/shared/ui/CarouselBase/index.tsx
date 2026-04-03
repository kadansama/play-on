import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PropsWithChildren } from "react";

type CarouselBaseProps = PropsWithChildren<{
  settings: any;
  className?: string;
}>;

export const CarouselBase = ({ settings, children, className }: CarouselBaseProps) => {
  return (
    <div className={className}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
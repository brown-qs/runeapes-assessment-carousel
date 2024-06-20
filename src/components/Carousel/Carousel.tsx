import React from "react";

export interface CarouselProps {
  label: string;
}

const Carousel = ({ label }: CarouselProps) => {
  return <div>{label}</div>;
};

export default Carousel;

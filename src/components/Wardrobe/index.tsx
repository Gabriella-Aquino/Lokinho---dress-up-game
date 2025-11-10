import React from "react";
import type { IClothe } from "../../types/clothe";
import ClothCard from "../ClothCard";
import Carousel, { type ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface WardrobeProps {
  items: IClothe[];
}

const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
    slidesToSlide: 3,
  },
  largeDesktop: {
    breakpoint: { max: 3000, min: 1920 },
    items: 5,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1280 },
    items: 4,
    slidesToSlide: 2,
  },
  smallDesktop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  // por fazer: de tablet pra cima controlar pq o carousel vai pra cima, talvez nem seja preciso todos os breakpoints aqui

  smallTablet: {
    breakpoint: { max: 767, min: 600 },
    items: 4,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 599, min: 375 },
    items: 4,
    slidesToSlide: 1,
  },
  smallMobile: {
    breakpoint: { max: 374, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};


function Wardrobe({ items }: WardrobeProps) {
  if (!items) {
    return;
  }

  return (
    <div className="flex w-full p-3 justify-center rounded-tl-3xl rounded-tr-3xl bg-[#F3F3F3] max-h-36 overflow-y-auto">
      <div className="grid grid-cols-4 gap-2">
        {items.map((item) => (
          <ClothCard item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
}

export default Wardrobe;

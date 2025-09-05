import React, { useRef } from "react";
import Carousel, { type ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cn } from "../../lib/utils";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface TabsProps {
  tabs: { id: number; icon: string | React.ReactNode; value: string }[];
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

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

const Group = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide, slidesToShow, totalItems },
  } = rest;

  const canGoBack = currentSlide !== 0;
  const canGoForward = currentSlide + slidesToShow < totalItems;

  return (
    <div className="pointer-events-none absolute inset-0 px-2 w-full flex items-center justify-between">
      <CustomLeftArrow
        onClick={previous}
        className={cn(["pointer-events-auto", canGoBack ? "opacity-100" : "opacity-0"])}
      />
      <CustomRightArrow
        onClick={next}
        className={cn(["pointer-events-auto", canGoForward ? "opacity-100" : "opacity-0"])}
      />
    </div>
  );
};

const CustomLeftArrow = ({ onClick, className }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className={cn([
        "transition-opacity duration-100 z-0 px-1.5 h-full bg-primary rounded-2xl hover:bg-accent",
        className,
      ])}
    >
      <IoIosArrowBack color="white" strokeWidth={30} size={20} />
    </button>
  );
};

const CustomRightArrow = ({ onClick, className }: ArrowProps) => (
  <button
    onClick={onClick}
    className={cn([
      "transition-opacity duration-100 z-0 px-1.5 h-full bg-primary rounded-2xl hover:bg-accent",
      className,
    ])}
  >
    <IoIosArrowForward color="white" strokeWidth={30} size={20} />
  </button>
);

function Tabs({ tabs }: TabsProps) {
  const carouselRef = useRef<Carousel>(null);

  return (
    <div className="relative w-full">
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        arrows={false}
        customButtonGroup={<Group />}
        renderButtonGroupOutside
        swipeable
        draggable
        className="mx-10 ml-12"
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="relative z-50 py-2 px-4 rounded-2xl bg-primary w-min cursor-pointer flex hover:bg-accent"
            onClick={() => {console.log(tab.id)}}
          >
            {typeof tab.icon === "string" ? (
              <img
                src={tab.icon}
                alt={tab.value}
                className="w-[30px] h-[30px]"
              />
            ) : (
              tab.icon
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Tabs;

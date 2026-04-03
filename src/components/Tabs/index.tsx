import { useRef } from "react";
import Carousel, { type ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cn } from "../../lib/utils";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import type { ITab } from "../../types/tab";

interface TabsProps {
  tabs: ITab[];
  activeTab: ITab;
  onTabClick: (tab: ITab) => void;
}
const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 1920, min: 1280 },
    items: 5,
    slidesToSlide: 2,
  },
  smallDesktop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 4,
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

function Tabs({ tabs, activeTab, onTabClick }: TabsProps) {
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
        className="mx-8"
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "relative z-50 flex w-min cursor-pointer rounded-2xl px-3 py-2 transition-colors",
              tab.id === activeTab.id ? "bg-accent" : "bg-primary hover:bg-accent"
            )}
            onClick={() => onTabClick(tab)}
          >
            {tab.icon}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Tabs;

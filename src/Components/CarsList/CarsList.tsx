import React, { useEffect, useState } from "react";
import CarsData from "../../api/cars.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarListItem from "../CarListItem/CarListItem";
import { ICar } from "../../interface/cars";

const CarsList = () => {
  const [data, setData] = useState<ICar[]>([]); // store data
  const [showDots, setShowDots] = useState(false); // hide dots for large screen

  useEffect(() => {
    setData(CarsData);
  }, []);

  //responsive breakpoints for plugin
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
  };

  const layoutResize = () => {
    // on window resize show dots only for small screen
    if (window.innerWidth > 1024) setShowDots(false);
    else setShowDots(true);
  };
  useEffect(() => {
    layoutResize();
    window.addEventListener("resize", layoutResize);
    return () => {
      window.removeEventListener("resize", layoutResize);
    };
  }, []);


  return (
    <div>
      {data && data.length > 0 && (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={showDots}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          partialVisible={true}
        >
          {data.map((data: ICar, index: number) => {
            return <CarListItem key={index} data={data} />;
          })}
        </Carousel>
      )}
    </div>
  );
};
export default React.memo(CarsList);

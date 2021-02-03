import React from "react";
import {SliderImages} from "./SliderImages";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SliderContent from "./SliderContent";
import "./slider.css";

const len = SliderImages.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;

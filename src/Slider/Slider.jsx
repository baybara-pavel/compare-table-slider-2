import React, { forwardRef } from "react";
import { animated, interpolate } from "react-spring";

import { Wrapper, ArrowNext, ArrowPrev } from "./Slider.sltyles";
export const Slider = forwardRef(
  (
    {
      xyz = [0, 0, 0],
      children,
      showArrows = true,
      showPrevArrow = true,
      showNextArrow = true,
      onClickNext,
      onClickPrev,
      renderNextArrow = () => (
        <ArrowNext onClick={onClickNext}>{`>`}</ArrowNext>
      ),
      rendePrevArrow = () => <ArrowPrev onClick={onClickPrev}>{`<`}</ArrowPrev>
    },
    ref
  ) => {
    return (
      <Wrapper>
        {showArrows && showPrevArrow && rendePrevArrow()}
        <animated.div
          ref={ref}
          style={{
            transform: interpolate(
              xyz,
              (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
            )
          }}
        >
          {children}
        </animated.div>
        {showArrows && showNextArrow && renderNextArrow()}
      </Wrapper>
    );
  }
);

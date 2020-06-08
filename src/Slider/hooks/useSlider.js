import { useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";

export function useSlider({
  initIndex = 0,
  itemWidth,
  count,
  // onPositionChange = ({ direction, xyz }) => console.log(direction, xyz)
  onPositionChange
}) {
  const indexState = useState(initIndex);
  const [activeIndex] = indexState;

  const mainContainerRef = useRef();
  const containerWidth =
    (mainContainerRef &&
      mainContainerRef.current &&
      mainContainerRef.current.offsetWidth) ||
    0;

  const left = activeIndex * itemWidth * -1;
  const right =
    (count * itemWidth - activeIndex * itemWidth - containerWidth) * -1;

  const prevLeft = useRef(left);

  const [{ xyz }, set] = useSpring(() => ({
    from: {
      xyz: [left, 0, 0]
    }
  }));

  useEffect(() => {
    const nextXYZ = [left, 0, 0];
    set({ xyz: nextXYZ });

    if (onPositionChange && prevLeft && prevLeft.current !== left) {
      onPositionChange({
        direction: prevLeft.current > left ? "next" : "prev",
        xyz: nextXYZ
      });
    }
    prevLeft.current = left;
  }, [left]);

  const showPrevArrow = left !== 0;
  const showNextArrow = right <= 0;

  return {
    indexState,
    xyz,
    showPrevArrow,
    showNextArrow,
    mainContainerRef
  };
}

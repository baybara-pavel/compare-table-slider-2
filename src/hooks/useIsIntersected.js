import { useRef, useState, useCallback, useEffect } from "react";
export function useIsIntersected() {
  const targetRef = useRef();
  const [isIntersected, setIntersection] = useState(false);

  const handler = useCallback(entries => {
    // entries is an array of observed dom nodes
    // we're only interested in the first one at [0]
    // because that's our .sentinal node.
    // Here observe whether or not that node is in the viewport
    if (!entries[0].isIntersecting) {
      setIntersection(true);
    } else {
      setIntersection(false);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handler);
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, []);

  return {
    isIntersected,
    targetRef
  };
}

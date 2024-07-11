import { useEffect, useLayoutEffect, useState } from "react";

export default function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSize = () => {
    const newDims = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    setWindowSize(newDims);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

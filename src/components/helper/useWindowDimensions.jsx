import { useEffect, useState } from "react";

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimesions = () => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    const aspect = hasWindow ? width / height : null;

    return {
      width,
      height,
      aspect,
    };
  };
  const [windowDimensions, setWindowDimesions] = useState(getWindowDimesions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimesions(getWindowDimesions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}

import { useState, useLayoutEffect, useCallback } from "react";

export interface WindowDimensionType {
  windowDims: {
    fullWidth: number;
    fullHeight: number;
    halfWidth: number;
    halfHeight: number;
    quarterWidth: number;
    quarterHeight: number;
  };
}

// This hook accepts a Window object, and spits out its dimensions in different tiers as it changes
export const useWindowDims = ({innerWidth, innerHeight}: Window): WindowDimensionType => {
  
  const dimSettings = useCallback(
    () => ({
      fullWidth: innerWidth,
      fullHeight: innerHeight,
      halfWidth: Math.round(innerWidth / 2),
      halfHeight: Math.round(innerHeight / 2),
      quarterWidth: Math.round(innerWidth / 4),
      quarterHeight: Math.round(innerHeight / 4),
    }),
    [window.innerWidth, window.innerHeight]
  );
  let [windowDims, setWindowDims] = useState(dimSettings);

  useLayoutEffect(() => {
    const handleResize = (): void => {
      setWindowDims(dimSettings);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimSettings, window]);

  return {
    windowDims,
  };
};

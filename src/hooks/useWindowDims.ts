import { useState, useLayoutEffect, useCallback } from "react";

export interface WindowDimensionType {
  windowDims: {
    full: {
      width: number;
      height: number;
    };
    half: {
      width: number;
      height: number;
    };
    quarter: {
      width: number;
      height: number;
    };
  };
}

// This hook accepts a Window object, and spits out its dimensions in different tiers as it changes
export const useWindowDims = ({
  innerWidth,
  innerHeight,
}: Window): WindowDimensionType => {
  const dimSettings = useCallback(
    () => ({
      full: {
        width: innerWidth,
        height: innerHeight,
      },
      half: {
        width: Math.round(innerWidth / 2),
        height: Math.round(innerHeight / 2),
      },
      quarter: {
        width: Math.round(innerWidth / 4),
        height: Math.round(innerHeight / 4),
      },
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

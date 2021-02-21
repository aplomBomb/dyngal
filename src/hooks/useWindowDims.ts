import { useState, useEffect, useCallback } from "react";
import { WindowDimensionType } from "./hooktypes";

export const useWindowDims = (window: Window): WindowDimensionType => {
  let dimSettings = useCallback(
    () => ({
      fullWidth: window.innerWidth,
      fullHeight: window.innerHeight,
      halfWidth: Math.round(window.innerWidth / 2),
      halfHeight: Math.round(window.innerHeight / 2),
      quarterWidth: Math.round(window.innerWidth / 4),
      quarterHeight: Math.round(window.innerHeight / 4),
    }),
    [window.innerWidth, window.innerHeight]
  );
  let [windowDims, setWindowDims] = useState(dimSettings);

  useEffect(() => {
    const handleResize = (): any => {
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

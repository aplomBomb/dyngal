import { useState, useEffect, useCallback } from "react";
import { WindowDimensionType } from "./hooktypes";

export const useWindowDims = ({innerWidth, innerHeight}: Window): WindowDimensionType => {
  let dimSettings = useCallback(
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

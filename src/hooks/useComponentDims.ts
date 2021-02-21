import { useState, useEffect, forwardRef, FC } from "react";
import { CompatibleDimChild } from "./hooktypes";

export const useComponentDims = (node: FC<CompatibleDimChild>) => {
  
  let [dims, setDims] = useState({
    fullWidth: window.innerWidth,
    fullHeight: window.innerHeight,
    halfWidth: Math.round(window.innerWidth / 2),
    halfHeight: Math.round(window.innerHeight / 2),
    quarterWidth: Math.round(window.innerWidth / 4),
    quarterHeight: Math.round(window.innerHeight / 4),
  });

  const getDims = (): any => {
    if (window.innerHeight % 250 === 0 || window.innerWidth % 250 === 0) {
      console.log(`${window.innerHeight}X${window.innerWidth}`);
    }
    return {
      fullWidth: window.innerWidth,
      fullHeight: window.innerHeight,
      halfWidth: Math.round(window.innerWidth / 2),
      halfHeight: Math.round(window.innerHeight / 2),
      quarterWidth: Math.round(window.innerWidth / 4),
      quarterHeight: Math.round(window.innerHeight / 4),
    };
  };

  useEffect(() => {
    const handleResize = () => {
      setDims(getDims());
    };
    console.log("Cleaning up resize listener");
    window.addEventListener("resize", handleResize);
  }, []);

  return {
    dims,
  };
};

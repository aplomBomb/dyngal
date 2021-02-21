// import { useState, useEffect, forwardRef, FC } from "react";
// import { RefDimsType } from "./hooktypes";

export const useRefDims = () => {}
//   refObject: React.RefObject<HTMLElement>
// ): RefDimsType => {
//   let [refDims, setRefDims] = useState({
//     fullWidth: refObject.current.offsetWidth,
//     fullHeight: refObject.current.offsetHeight,
//     halfWidth: Math.round(refObject.current.offsetWidth / 2),
//     halfHeight: Math.round(refObject.current.offsetHeight / 2),
//     quarterWidth: Math.round(refObject.current.offsetWidth / 4),
//     quarterHeight: Math.round(refObject.current.offsetHeight / 4),
//   });

//   const getDims = (): any => {
//     if (window.innerHeight % 250 === 0 || window.innerWidth % 250 === 0) {
//       console.log(`${window.innerHeight}X${window.innerWidth}`);
//     }
//     return {
//       fullWidth: window.innerWidth,
//       fullHeight: window.innerHeight,
//       halfWidth: Math.round(window.innerWidth / 2),
//       halfHeight: Math.round(window.innerHeight / 2),
//       quarterWidth: Math.round(window.innerWidth / 4),
//       quarterHeight: Math.round(window.innerHeight / 4),
//     };
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setRefDims(getDims());
//     };
//     console.log("Cleaning up resize listener");
//     window.addEventListener("resize", handleResize);
//   }, []);

//   return {
//     refDims,
//   };
// };

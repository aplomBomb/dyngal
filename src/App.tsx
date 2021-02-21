import { useRef, useEffect } from "react";
import styled from "styled-components";
import { useWindowDims } from "./hooks";

export const App = () => {
  const { dims } = useWindowDims(window);
  const appContainerRef = useRef<React.RefObject>();

  useEffect(() => {
    if (appContainerRef.current !== null) {
      console.log(`refCurrent details: ${appContainerRef.current.offsetWidth}`);
    }
  }, [appContainerRef]);

  return (
    // <AppContainer className="App" ref={} width={dims.fullWidth} height={dims.fullHeight}>

    // </AppContainer>

    <AppContainer
      ref={appContainerRef}
      width={dims.fullWidth}
      height={dims.fullHeight}
    ></AppContainer>
  );
};

const AppWrapper = styled.div`
  width: 20rem;
  height: 40rem;
`;

const AppContainer = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

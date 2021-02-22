import { useRef, useEffect } from "react";
import styled from "styled-components";
import { useWindowDims } from "./hooks";

export const App = () => {
  const appContainerRef = useRef<HTMLDivElement>();
  const { windowDims } = useWindowDims(window);
  // const { refDims } = useRefDims(appContainerRef);

  return (
    // <AppContainer className="App" ref={} width={dims.fullWidth} height={dims.fullHeight}>

    // </AppContainer>

    <AppContainer
      // ref={appContainerRef}
      width={windowDims.half.width}
      height={windowDims.half.height}
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
  background-color: #36393e;
`;

import { useRef, useEffect } from "react";
import styled from "styled-components";
import db from "./db.png";
import { useWindowDims } from "./hooks";

export const App = () => {
  const appContainerRef = useRef<HTMLDivElement>();
  const { windowDims } = useWindowDims(window);
  // const { refDims } = useParentDims(appContainerRef);

  useEffect(() => {
    const handleCopy = (clipboardData: ClipboardEvent): void => {
      console.log(clipboardData);
    };
    const handlePaste = (clipboardData: ClipboardEvent): void => {
      console.log("Paste detected");
    };
    document.addEventListener("copy", handleCopy);
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("copy", handleCopy);
      document.addEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <AppContainer
      // ref={appContainerRef}
      width={windowDims.half.width}
      height={windowDims.half.height}
    >
      <h1>HELLO</h1>ß
      <img src={db} alt="dickbutt" width="200rem"></img>
      <input></input>
    </AppContainer>
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

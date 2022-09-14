import { baseFont } from "src/design-system/constants";
import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const GlobalStyle = createGlobalStyle`
  html, body, body > div {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    font-family: ${baseFont};
  }
`;

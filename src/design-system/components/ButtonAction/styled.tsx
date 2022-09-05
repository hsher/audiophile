import buttonActionThemes from "src/design-system/constants/buttonActionThemes";
import styled, { css } from "styled-components";

const buttonThemeStyles = {
  [buttonActionThemes.PRIMARY]: css`
    //Some css

    &:hover {
      //Some css
    }

    &:active {
      //Some css
    }
  `,
  [buttonActionThemes.SECONDARY]: css`
    //Some css

    &:hover {
      //Some css
    }

    &:active {
      //Some css
    }
  `,
  // ... and so on
};

const withThemeStyles = ({ theme }) => buttonThemeStyles[theme];

export const ButtonActionBase = styled.button`
  //Some shared css

  ${withThemeStyles};
`;

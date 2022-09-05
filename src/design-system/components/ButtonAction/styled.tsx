import { BLACK, OCHRE, WHITE } from "src/design-system/colors";
import { baseFont, buttonActionThemes } from "src/design-system/constants";
import styled, { css } from "styled-components";

const buttonThemeStyles = {
  [buttonActionThemes.PRIMARY]: css`
    background-color: ${OCHRE};
    color: ${WHITE};

    &:hover {
      filter: brightness(120%);
    }
  `,
  [buttonActionThemes.SECONDARY]: css`
    border: 1px solid ${BLACK};
    color: ${BLACK};

    &:hover {
      background-color: ${BLACK};
      color: ${WHITE};
    }
  `,
  [buttonActionThemes.TERTIARY]: css`
    background: transparent;
    color: ${BLACK}7F;

    &:hover {
      color: ${OCHRE};
    }
  `,
};

const withThemeStyles = ({ theme }) => buttonThemeStyles[theme];

export const ButtonActionBase = styled.button`
  align-items: center;
  border: 0;
  display: flex;
  font-family: ${baseFont};
  font-size: 13px;
  font-weight: 700;
  height: 48px;
  justify-content: center;
  letter-spacing: 1px;
  line-height: 18px;
  min-width: 160px;
  padding: 15px;
  text-transform: uppercase;

  ${withThemeStyles};
`;

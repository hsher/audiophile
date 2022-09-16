import { WHITE } from "src/design-system/colors";
import { Body, H1, Wide } from "src/design-system/typography";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const SmallTitle = styled(Wide)`
  color: ${WHITE};
  opacity: 0.5;
  padding: 0 50px 24px 0;
`;

export const PageTitle = styled(H1)`
  color: ${WHITE};
  padding: 0 50px 24px 0;
`;

export const Description = styled(Body)`
  color: ${WHITE};
  max-width: 65%;
  opacity: 0.75;
  padding-bottom: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const DesktopImage = styled.div`
  padding: 50px 0;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
`;

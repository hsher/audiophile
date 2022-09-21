import { WHITE } from "src/design-system/colors";
import { device } from "src/design-system/constants";
import { Body, H1, Wide } from "src/design-system/typography";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &:first-child {
    align-items: center;
  }

  &:last-child {
    @media ${device.tablet} {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    @media ${device.mobile} {
      height: 100%;
      left: 0;
      top: 0;
      transform: none;
      width: 100%;
    }
  }
`;

export const SmallTitle = styled(Wide)`
  color: ${WHITE};
  opacity: 0.5;
  padding: 0 50px 24px 0;

  @media ${device.tablet} {
    padding: 0 0 24px 0;
  }

  @media ${device.mobile} {
    padding: 0 0 16px 0;
  }
`;

export const PageTitle = styled(H1)`
  color: ${WHITE};
  padding: 0 50px 24px 0;

  @media ${device.tablet} {
    padding: 0 0 24px 0;
    text-align: center;
  }
`;

export const Description = styled(Body)`
  color: ${WHITE};
  max-width: 65%;
  opacity: 0.75;
  padding-bottom: 40px;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    padding-bottom: 28px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const DesktopImage = styled.div`
  padding: 50px 0;

  @media ${device.mobile} {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  @media ${device.tablet} {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 50%;
    padding: 125px 0;
  }

  @media ${device.mobile} {
    max-width: initial;
    padding: 110px 24px;
  }
`;

export const MobileImage = styled.div`
  display: none;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;

  @media ${device.mobile} {
    display: block;
  }
`;

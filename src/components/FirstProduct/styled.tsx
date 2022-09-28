import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { WHITE } from "src/design-system/colors";
import { device } from "src/design-system/constants";
import { Body, PrimaryLarge } from "src/design-system/typography";
import styled from "styled-components";

export const FirstProductWrapper = styled(ContainerWrapper)`
  padding-bottom: 48px;

  @media ${device.tablet} {
    padding: 0 40px 32px;
  }
`;

export const ContainerRow = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media ${device.tablet} {
    justify-content: center;
  }
`;

export const Content = styled.div`
  padding: 134px 80px 123px 0;
  position: relative;
  width: 40%;
  z-index: 2;

  @media ${device.tablet} {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 353px 0 64px 0;
    width: 350px;
  }
`;

export const SectionTitle = styled(PrimaryLarge).attrs({
  as: "h2",
})`
  color: ${WHITE};
  padding: 0 50px 24px 0;

  @media ${device.tablet} {
    padding: 0 0 24px 0;
    text-align: center;
  }
`;

export const Description = styled(Body)`
  color: ${WHITE};
  opacity: 0.75;
  padding-bottom: 40px;

  @media ${device.tablet} {
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const DesktopImage = styled.div`
  border-radius: 8px;
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  @media ${device.tablet} {
    display: none;
  }
`;

export const TabletImage = styled(DesktopImage)`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const MobileImage = styled.div`
  display: none;
`;

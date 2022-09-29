import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { GRAY } from "src/design-system/colors";
import { device } from "src/design-system/constants";
import { SecondaryLarge } from "src/design-system/typography";
import styled from "styled-components";

export const ThirdProductWrapper = styled(ContainerWrapper)`
  padding-bottom: 200px;

  @media ${device.tablet} {
    padding: 0 40px 96px;
  }
`;

export const ContainerRow = styled(Container)`
  display: flex;
  gap: 30px;

  @media ${device.tablet} {
    gap: 11px;
  }
`;

export const Content = styled.div`
  background-color: ${GRAY};
  border-radius: 8px;
  padding: 102px 0 101px 94px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 102px 0px 101px 42px;
  }
`;

export const SectionTitle = styled(SecondaryLarge).attrs({
  as: "h2",
})`
  padding: 0 50px 31px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const DesktopImage = styled.div`
  border-radius: 8px;
  height: 100%;
  overflow: hidden;
  position: relative;

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

export const Col = styled.div`
  flex: 1;
`;

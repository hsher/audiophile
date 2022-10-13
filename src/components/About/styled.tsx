import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { OCHRE } from "src/design-system/colors";
import { device } from "src/design-system/constants";
import { Body, PrimaryMedium } from "src/design-system/typography";
import styled from "styled-components";

export const AboutWrapper = styled(ContainerWrapper)`
  padding-bottom: 200px;

  @media ${device.tablet} {
    padding: 0 40px 0;
  }
`;

export const ContainerRow = styled(Container)`
  display: flex;
  gap: 30px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  border-radius: 8px;
  padding: 147px 94px 147px 0;

  @media ${device.tablet} {
    padding: 35px 0 96px 0;
    text-align: center;
  }
`;

export const SectionTitle = styled(PrimaryMedium).attrs({
  as: "h2",
})`
  padding: 0 50px 31px 0;

  @media ${device.tablet} {
    padding: 0 24px 31px;
  }
`;

export const Colored = styled.span`
  color: ${OCHRE};
`;

export const Description = styled(Body)`
  opacity: 0.5;

  @media ${device.tablet} {
    padding: 0 50px;
  }
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

  @media ${device.tablet} {
    order: 2;
  }

  &:last-child {
    @media ${device.tablet} {
      order: 1;
    }
  }
`;

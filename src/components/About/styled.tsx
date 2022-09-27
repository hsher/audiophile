import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { OCHRE } from "src/design-system/colors";
import { Body, PrimaryMedium } from "src/design-system/typography";
import styled from "styled-components";

export const AboutWrapper = styled(ContainerWrapper)`
  padding-bottom: 200px;
`;

export const ContainerRow = styled(Container)`
  display: flex;
  gap: 30px;
`;

export const Content = styled.div`
  border-radius: 8px;
  padding: 147px 94px 147px 0;
`;

export const SectionTitle = styled(PrimaryMedium).attrs({
  as: "h2",
})`
  padding: 0 50px 31px 0;
`;

export const Colored = styled.span`
  color: ${OCHRE};
`;

export const Description = styled(Body)`
  opacity: 0.5;
`;

export const DesktopImage = styled.div`
  border-radius: 8px;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const MobileImage = styled.div`
  display: none;
`;

export const Col = styled.div`
  flex: 1;
`;

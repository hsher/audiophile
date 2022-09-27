import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { WHITE } from "src/design-system/colors";
import { Body, PrimaryLarge } from "src/design-system/typography";
import styled from "styled-components";

export const FirstProductWrapper = styled(ContainerWrapper)`
  padding-bottom: 48px;
`;

export const ContainerRow = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const Content = styled.div`
  padding: 134px 80px 123px 0;
  position: relative;
  width: 40%;
  z-index: 2;
`;

export const SectionTitle = styled(PrimaryLarge).attrs({
  as: "h2",
})`
  color: ${WHITE};
  padding: 0 50px 24px 0;
`;

export const Description = styled(Body)`
  color: ${WHITE};
  opacity: 0.75;
  padding-bottom: 40px;
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
`;

export const MobileImage = styled.div`
  display: none;
`;

import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { SecondaryLarge } from "src/design-system/typography";
import styled from "styled-components";

export const SecondProductWrapper = styled(ContainerWrapper)`
  padding-bottom: 48px;
`;

export const ContainerRow = styled(Container)`
  display: flex;
  position: relative;
`;

export const Content = styled.div`
  padding: 102px 0 101px 94px;
  position: relative;
  width: 40%;
  z-index: 2;
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

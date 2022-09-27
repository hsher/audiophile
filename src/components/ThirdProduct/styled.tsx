import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { GRAY } from "src/design-system/colors";
import { SecondaryLarge } from "src/design-system/typography";
import styled from "styled-components";

export const ThirdProductWrapper = styled(ContainerWrapper)`
  padding-bottom: 200px;
`;

export const ContainerRow = styled(Container)`
  display: flex;
  gap: 30px;
`;

export const Content = styled.div`
  background-color: ${GRAY};
  border-radius: 8px;
  padding: 102px 0 101px 94px;
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
  overflow: hidden;
`;

export const MobileImage = styled.div`
  display: none;
`;

export const Col = styled.div`
  flex: 1;
  position: relative;
`;

import { WHITE } from "src/design-system/colors";
import { PrimaryMedium } from "src/design-system/typography";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 101px 50px 97px;
`;

export const PageTitle = styled(PrimaryMedium).attrs({
  as: "h1",
})`
  color: ${WHITE};
`;

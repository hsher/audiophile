import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import SecondaryHeroSection from "src/components/SecondaryHeroSection";
import { DARK } from "src/design-system/colors";

function Category() {
  return (
    <ContainerWrapper backgroundColor={DARK}>
      <Container>
        <SecondaryHeroSection>Headphones</SecondaryHeroSection>
      </Container>
    </ContainerWrapper>
  );
}

export default Category;

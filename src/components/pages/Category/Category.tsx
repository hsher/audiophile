import CategoryProductCard from "src/components/CategoryProductCard";
import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import SecondaryHeroSection from "src/components/SecondaryHeroSection";
import { DARK, GRAY_LIGHT } from "src/design-system/colors";

function Category() {
  return (
    <>
      <ContainerWrapper backgroundColor={DARK}>
        <Container>
          <SecondaryHeroSection>Headphones</SecondaryHeroSection>
        </Container>
      </ContainerWrapper>

      <ContainerWrapper backgroundColor={GRAY_LIGHT}>
        <Container>
          <CategoryProductCard />
        </Container>
      </ContainerWrapper>
    </>
  );
}

export default Category;

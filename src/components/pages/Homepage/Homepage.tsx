import About from "src/components/About";
import Categories from "src/components/Categories";
import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import FirstProduct from "src/components/FirstProduct";
import HeroSection from "src/components/HeroSection";
import SecondProduct from "src/components/SecondProduct";
import ThirdProduct from "src/components/ThirdProduct";
import { DARK, GRAY_LIGHT } from "src/design-system/colors";

function Homepage() {
  return (
    <>
      <ContainerWrapper backgroundColor={DARK}>
        <Container>
          <HeroSection />
        </Container>
      </ContainerWrapper>
      <ContainerWrapper backgroundColor={GRAY_LIGHT}>
        <Container>
          <Categories />
          <FirstProduct />
          <SecondProduct />
          <ThirdProduct />
          <About />
        </Container>
      </ContainerWrapper>
    </>
  );
}

export default Homepage;

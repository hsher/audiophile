import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import HeroSection from "src/components/HeroSection";
import { DARK } from "src/design-system/colors";

function Homepage() {
  return (
    <ContainerWrapper backgroundColor={DARK}>
      <Container>
        <HeroSection />
      </Container>
    </ContainerWrapper>
  );
}

export default Homepage;

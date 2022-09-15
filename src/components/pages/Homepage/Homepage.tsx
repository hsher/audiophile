import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { DARK } from "src/design-system/colors";

function Homepage() {
  return (
    <ContainerWrapper backgroundColor={DARK}>
      <Container>Hero Section</Container>
    </ContainerWrapper>
  );
}

export default Homepage;

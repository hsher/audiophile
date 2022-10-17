import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { BLACK, OCHRE } from "src/design-system/colors";
import { device } from "src/design-system/constants";
import { Body, PrimaryMedium, Wide } from "src/design-system/typography";
import styled from "styled-components";

export const CategoryProductCardWrapper = styled(ContainerWrapper)`
  padding-bottom: 200px;

  @media ${device.tablet} {
    padding: 0 40px 0;
  }
`;

export const ContainerRow = styled(Container)`
  display: flex;
  gap: 30px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const DesktopImage = styled.div`
  border-radius: 8px;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const SmallTitle = styled(Wide)`
  color: ${OCHRE};
  opacity: 0.5;
  padding: 0 50px 24px 0;

  @media ${device.tablet} {
    padding: 0 0 24px 0;
  }

  @media ${device.mobile} {
    padding: 0 0 16px 0;
  }
`;

export const PageTitle = styled(PrimaryMedium).attrs({
  as: "h2",
})`
  color: ${BLACK};
  padding: 0 50px 24px 0;

  @media ${device.tablet} {
    padding: 0 0 24px 0;
    text-align: center;
  }
`;

export const Description = styled(Body)`
  color: ${BLACK};
  max-width: 65%;
  opacity: 0.75;
  padding-bottom: 40px;

  @media ${device.tablet} {
    max-width: initial;
    padding: 0 10px 40px;
    text-align: center;
  }

  @media ${device.mobile} {
    padding-bottom: 28px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  @media ${device.tablet} {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    max-width: 50%;
    padding: 125px 0 168px;
  }

  @media ${device.mobile} {
    max-width: initial;
    padding: 110px 24px;
  }
`;

export const Col = styled.div`
  flex: 1;

  @media ${device.tablet} {
    // order: 2;
  }

  &:last-child {
    @media ${device.tablet} {
      // order: 1;
    }
  }
`;

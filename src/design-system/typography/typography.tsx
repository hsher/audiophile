import { baseFont, device } from "src/design-system/constants";
import styled from "styled-components";

export const PrimaryLarge = styled.h1`
  font-family: ${baseFont};
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 58px;
  text-transform: uppercase;

  @media ${device.mobile} {
    font-size: 36px;
    letter-spacing: 1.28571px;
    line-height: 40px;
  }
`;

export const PrimaryMedium = styled.h2`
  font-family: ${baseFont};
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1.42857px;
  line-height: 44px;
  text-transform: uppercase;
`;

export const PrimarySmall = styled.h3`
  font-family: ${baseFont};
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.14286px;
  line-height: 36px;
  text-transform: uppercase;
`;

export const SecondaryLarge = styled.h4`
  font-family: ${baseFont};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 38px;
  text-transform: uppercase;
`;

export const SecondaryMedium = styled.h5`
  font-family: ${baseFont};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.71429px;
  line-height: 33px;
  text-transform: uppercase;
`;

export const SecondarySmall = styled.h6`
  font-family: ${baseFont};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.28571px;
  line-height: 25px;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 15px;
    letter-spacing: 1.07143px;
    line-height: 20px;
  }
`;

export const Wide = styled.p`
  font-family: ${baseFont};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 10px;
  line-height: 19px;
  text-transform: uppercase;
`;

export const Caps = styled.p`
  font-family: ${baseFont};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.928571px;
  line-height: 25px;
  text-transform: uppercase;
`;

export const Body = styled.p`
  font-family: ${baseFont};
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
`;

export { PrimaryLarge as H1 };
export { PrimaryMedium as H2 };
export { PrimarySmall as H3 };
export { SecondaryLarge as H4 };
export { SecondaryMedium as H5 };
export { SecondarySmall as H6 };

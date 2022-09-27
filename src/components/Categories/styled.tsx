import { BLACK, GRAY } from "src/design-system/colors";
import { device } from "src/design-system/constants";
import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  padding: 200px 0 168px;

  @media ${device.tablet} {
    gap: 10px;
    padding: 148px 40px 96px;
  }

  @media ${device.mobile} {
    align-items: center;
    flex-direction: column;
    gap: 68px;
    padding: 92px 24px 120px;
  }
`;

export const Category = styled.div`
  align-items: center;
  background-color: ${GRAY};
  border-radius: 8px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 60px 15px 15px 15px;
  position: relative;

  @media ${device.tablet} {
    padding: 42px 15px 8px 15px;
  }

  @media ${device.mobile} {
    min-width: 327px;
    padding: 34px 15px 7px 15px;
  }
`;

export const ImageWrapper = styled.div`
  left: 50%;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translate(-50%, -50%);
  width: 100%;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ImageWrapperMWeb = styled(ImageWrapper)`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const Shadow = styled.div`
  background: ${BLACK};
  filter: blur(21.7463px);
  height: 18px;
  margin-bottom: 38px;
  width: 122px;

  @media ${device.tablet} {
    height: 14px;
    margin-bottom: 33px;
    width: 95px;
  }
`;

export const LinkText = styled.span`
  padding-right: 10px;
`;

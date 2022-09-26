import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { DARK, OCHRE, WHITE } from "src/design-system/colors";
import { baseFont, device } from "src/design-system/constants";
import styled from "styled-components";

export const FooterWrapper = styled(ContainerWrapper)`
  background-color: ${DARK};
  display: flex;
  justify-content: center;
`;

export const ContainerWithDecor = styled(Container)`
  padding-bottom: 48px;

  @media ${device.tablet} {
    padding: 0 40px 46px;
  }

  @media ${device.mobile} {
    padding: 0 24px 38px;
  }

  &::before {
    background-color: ${OCHRE};
    content: "";
    display: block;
    height: 4px;
    width: 100px;

    @media ${device.mobile} {
      margin: 0 auto;
    }
  }
`;

export const NavigationRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 70px 0 36px;

  @media ${device.tablet} {
    align-items: flex-start;
    flex-direction: column;
    padding: 56px 0 32px;
  }

  @media ${device.mobile} {
    align-items: center;
    padding: 48px 0 32px;
  }
`;

export const LogoWrapper = styled.div``;

export const Nav = styled.nav`
  @media ${device.tablet} {
    padding-top: 30px;
  }

  @media ${device.mobile} {
    padding-top: 45px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const NavLink = styled.a`
  color: ${WHITE};
  font-size: 13px;
  font-weight: 700;
  height: 28px;
  letter-spacing: 2px;
  line-height: 25px;
  padding: 0 16px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${OCHRE};
  }
`;

export const NavItem = styled.li`
  @media ${device.mobile} {
    padding-bottom: 16px;
    text-align: center;
  }

  &:first-child {
    ${NavLink} {
      @media ${device.tablet} {
        padding-left: 0;
      }

      @media ${device.mobile} {
        padding-left: 16px;
      }
    }
  }

  &:last-child {
    ${NavLink} {
      padding-right: 0;

      @media ${device.tablet} {
        padding-right: 16px;
      }
    }
  }
`;

export const Description = styled.div`
  color: ${WHITE};
  font-family: ${baseFont};
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  padding: 0 0 56px;
  width: 50%;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    padding: 0 0 47px;
    text-align: center;
  }
`;

export const Copyright = styled.div`
  color: ${WHITE};
  font-family: ${baseFont};
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  opacity: 0.5;

  @media ${device.mobile} {
    padding-bottom: 48px;
    text-align: center;
  }
`;

export const SocialWrapper = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, calc(-50% - 10px));
  z-index: 1;

  @media ${device.tablet} {
    position: static;
    transform: none;
  }

  @media ${device.mobile} {
    gap: 16px;
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  filter: invert(100%) sepia(100%) saturate(16%) hue-rotate(286deg) brightness(105%) contrast(104%);
  margin: 0 0 0 16px;

  @media ${device.mobile} {
    margin: 0;
  }

  &:hover {
    filter: invert(70%) sepia(53%) saturate(2862%) hue-rotate(328deg) brightness(92%) contrast(83%);
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
`;

export const UniteWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

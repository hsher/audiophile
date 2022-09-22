import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { BLACK, DARK, GRAY_LIGHT, OCHRE, WHITE } from "src/design-system/colors";
import { device } from "src/design-system/constants";
import styled from "styled-components";

export const HeaderWrapper = styled(ContainerWrapper)`
  background-color: ${DARK};
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    padding: 0 40px;
    position: relative;
    z-index: 4;
  }

  @media ${device.mobile} {
    padding: 0;
  }
`;

export const ContainerRow = styled(Container)`
  align-items: center;
  border-bottom: 1px solid ${GRAY_LIGHT}38;
  display: flex;
  justify-content: space-between;
  min-height: 90px;

  @media ${device.mobile} {
    padding: 0 24px;
  }
`;

export const MenuWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobile} {
    flex: 1;
    max-width: 50px;
  }
`;

export const Menu = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
`;

export const CartWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media ${device.mobile} {
    max-width: 50px;
  }
`;

export const LogoWrapper = styled.div`
  flex: 1;

  @media ${device.tablet} {
    padding-left: 42px;
  }

  @media ${device.mobile} {
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;

export const Nav = styled.nav`
  flex: 1;

  @media ${device.tablet} {
    bottom: 0;
    display: ${(props) => (props.menuIsOpen ? "block" : "none")};
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 3;
  }
`;

export const NavList = styled.ul`
  display: flex;
  padding: 32px 0 36px;

  @media ${device.tablet} {
    display: none;
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

  &:hover {
    color: ${OCHRE};
  }
`;

export const CategoriesWrapper = styled.div`
  background-color: ${WHITE};
  border-radius: 0px 0px 8px 8px;
  display: none;
  position: absolute;
  width: 100%;

  @media ${device.tablet} {
    display: block;
  }
`;

export const Shadow = styled.div`
  background-color: ${BLACK};
  content: "";
  display: none;
  height: 100%;
  opacity: 0.4;
  position: fixed;
  width: 100%;
  z-index: 3;

  @media ${device.tablet} {
    display: ${(props) => (props.menuIsOpen ? "block" : "none")};
  }
`;

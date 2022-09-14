import Container from "src/components/Container";
import ContainerWrapper from "src/components/ContainerWrapper";
import { DARK, GRAY_LIGHT, OCHRE, WHITE } from "src/design-system/colors";
import { device } from "src/design-system/constants";
import styled from "styled-components";

export const NavLink = styled.a`
  color: ${WHITE};
  font-size: 13px;
  font-weight: 700;
  height: 28px;
  letter-spacing: 2px;
  line-height: 25px;
  padding: 0 16px;
  text-decoration: none;

  @media ${device.tablet} {
    align-items: center;
    display: flex;
  }

  &:hover {
    color: ${OCHRE};
  }
`;

export const HeaderWrapper = styled(ContainerWrapper)`
  @media ${device.tablet} {
    padding: 0 40px;
    position: relative;
  }
`;

export const ContainerRow = styled(Container)`
  align-items: center;
  border-bottom: 1px solid ${GRAY_LIGHT}38;
  display: flex;
  justify-content: space-between;
  min-height: 90px;
`;

export const Menu = styled.button`
  background: transparent;
  border: 0;
  display: none;
  padding: 0;

  @media ${device.tablet} {
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  padding: 32px 0 36px;

  @media ${device.tablet} {
    background-color: ${DARK};
    flex-direction: column;
    padding: 32px 40px 36px;
    position: absolute;
    width: 100%;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const LogoWrapper = styled.div`
  flex: 1;

  @media ${device.tablet} {
    padding-left: 42px;
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
  }
`;

export const NavListItem = styled.li`
  @media ${device.tablet} {
    border-bottom: 1px solid ${GRAY_LIGHT}38;
    padding: 5px 0;
  }
`;

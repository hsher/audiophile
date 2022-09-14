import Container from "src/components/Container";
import { GRAY_LIGHT, OCHRE, WHITE } from "src/design-system/colors";
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

  &:hover {
    color: ${OCHRE};
  }
`;

export const ContainerRow = styled(Container)`
  align-items: center;
  border-bottom: 1px solid ${GRAY_LIGHT}38;
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.button`
  background: transparent;
  border: 0;
  display: none;
  padding: 0;
`;

export const NavList = styled.ul`
  display: flex;
  padding: 32px 0 36px;
`;

export const FullWidthColumn = styled.div`
  display: ${(props) => (props.align === "end" ? "flex" : "block")};
  flex: 1;
  justify-content: ${(props) => (props.align === "end" ? "flex-end" : "")};
`;

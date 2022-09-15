import Image from "next/image";
import Link from "next/link";
import cart from "public/cart.svg";
import logo from "public/logo.svg";
import menu from "public/menu.svg";
import ContainerWrapper from "src/components/ContainerWrapper";
import { DARK } from "src/design-system/colors";

import * as S from "./styled";

function Header() {
  return (
    <ContainerWrapper backgroundColor={DARK} as="header">
      <S.ContainerRow>
        <S.Menu type="button">
          <S.MenuIcon src={menu} alt="open navigation" width={16} height={15} />
        </S.Menu>

        <S.FullWidthColumn>
          <Link href="/">
            <a>
              <Image src={logo} alt="audiophile logo" width={143} height={25} />
            </a>
          </Link>
        </S.FullWidthColumn>

        <S.FullWidthColumn>
          <nav>
            <S.NavList>
              <li>
                <Link href="/" passHref>
                  <S.NavLink>HOME</S.NavLink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <S.NavLink>HEADPHONES</S.NavLink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <S.NavLink>SPEAKERS</S.NavLink>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <S.NavLink>EARPHONES</S.NavLink>
                </Link>
              </li>
            </S.NavList>
          </nav>
        </S.FullWidthColumn>

        <S.FullWidthColumn align="end">
          <Link href="/">
            <a>
              <Image src={cart} alt="cart" width={24} height={20} />
            </a>
          </Link>
        </S.FullWidthColumn>
      </S.ContainerRow>
    </ContainerWrapper>
  );
}

export default Header;

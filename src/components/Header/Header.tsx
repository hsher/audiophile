import Image from "next/image";
import Link from "next/link";
import cart from "public/cart.svg";
import logo from "public/logo.svg";
import menu from "public/menu.svg";
import { useState } from "react";
import Categories from "src/components/Categories";
import { DARK } from "src/design-system/colors";

import * as S from "./styled";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <S.HeaderWrapper backgroundColor={DARK} as="header">
        <S.ContainerRow>
          <S.MenuWrapper>
            <S.Menu type="button" onClick={handleToggleMenu}>
              <Image src={menu} alt="open navigation" width={16} height={15} />
            </S.Menu>
          </S.MenuWrapper>

          <S.LogoWrapper>
            <Link href="/">
              <a>
                <Image src={logo} alt="audiophile logo" width={143} height={25} />
              </a>
            </Link>
          </S.LogoWrapper>

          <S.Nav menuIsOpen={menuIsOpen}>
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
            <S.CategoriesWrapper>
              <Categories />
            </S.CategoriesWrapper>
          </S.Nav>

          <S.CartWrapper>
            <Link href="/">
              <a>
                <Image src={cart} alt="cart" width={24} height={20} />
              </a>
            </Link>
          </S.CartWrapper>
        </S.ContainerRow>
      </S.HeaderWrapper>
      <S.Shadow menuIsOpen={menuIsOpen} />
    </>
  );
}

export default Header;

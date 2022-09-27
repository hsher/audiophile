import Image from "next/image";
import Link from "next/link";
import facebook from "public/facebook.svg";
import instagramm from "public/instagramm.svg";
import logo from "public/logo.svg";
import twitter from "public/twitter.svg";
import ContainerWrapper from "src/components/ContainerWrapper";
import { DARK } from "src/design-system/colors";
import { categories } from "src/mocks/categories";

import * as S from "./styled";

function Footer() {
  return (
    <ContainerWrapper backgroundColor={DARK} element="footer">
      <S.ContainerWithDecor>
        <S.NavigationRow>
          <S.LogoWrapper>
            <Link href="/">
              <a>
                <Image src={logo} alt="audiophile logo" width={143} height={25} />
              </a>
            </Link>
          </S.LogoWrapper>

          <S.Nav>
            <S.NavList>
              <S.NavItem>
                <Link href="/" passHref>
                  <S.NavLink>HOME</S.NavLink>
                </Link>
              </S.NavItem>

              {categories.map(({ name, path }) => (
                <S.NavItem key={path}>
                  <Link href={path} passHref>
                    <S.NavLink>{name}</S.NavLink>
                  </Link>
                </S.NavItem>
              ))}
            </S.NavList>
          </S.Nav>
        </S.NavigationRow>
        <S.InfoWrapper>
          <S.Description>
            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </S.Description>
          <S.UniteWrapper>
            <S.Copyright>Copyright 2021. All Rights Reserved</S.Copyright>
            <S.SocialWrapper>
              <Link href="/" passHref>
                <S.SocialIcon>
                  <Image src={facebook} alt="facebook" width={24} height={24} />
                </S.SocialIcon>
              </Link>
              <Link href="/" passHref>
                <S.SocialIcon>
                  <Image src={twitter} alt="twitter" width={24} height={19} />
                </S.SocialIcon>
              </Link>
              <Link href="/" passHref>
                <S.SocialIcon>
                  <Image src={instagramm} alt="instagramm" width={24} height={24} />
                </S.SocialIcon>
              </Link>
            </S.SocialWrapper>
          </S.UniteWrapper>
        </S.InfoWrapper>
      </S.ContainerWithDecor>
    </ContainerWrapper>
  );
}

export default Footer;

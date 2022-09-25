import Image from "next/image";
import Link from "next/link";
import facebook from "public/facebook.svg";
import instagramm from "public/instagramm.svg";
import logo from "public/logo.svg";
import twitter from "public/twitter.svg";
import { DARK } from "src/design-system/colors";
import { categories } from "src/mocks/categories";

import * as S from "./styled";

function Footer() {
  return (
    <S.FooterWrapper backgroundColor={DARK} as="Footer">
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
              <li>
                <Link href="/" passHref>
                  <S.NavLink>HOME</S.NavLink>
                </Link>
              </li>

              {categories.map(({ name, path }) => (
                <li key={path}>
                  <Link href={path} passHref>
                    <S.NavLink>{name}</S.NavLink>
                  </Link>
                </li>
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
              <Link href="/">
                <S.SocialIcon>
                  <Image src={facebook} alt="facebook" width={24} height={24} />
                </S.SocialIcon>
              </Link>
              <Link href="/">
                <S.SocialIcon>
                  <Image src={twitter} alt="twitter" width={24} height={19} />
                </S.SocialIcon>
              </Link>
              <Link href="/">
                <S.SocialIcon>
                  <Image src={instagramm} alt="instagramm" width={24} height={24} />
                </S.SocialIcon>
              </Link>
            </S.SocialWrapper>
          </S.UniteWrapper>
        </S.InfoWrapper>
      </S.ContainerWithDecor>
    </S.FooterWrapper>
  );
}

export default Footer;

import Image from "next/image";
import AboutBg from "public/AboutBg.jpg";

import * as S from "./styled";

function About() {
  return (
    <S.AboutWrapper>
      <S.ContainerRow>
        <S.Col>
          <S.Content>
            <S.SectionTitle>
              Bringing you the <S.Colored>best</S.Colored> audio gear
            </S.SectionTitle>
            <S.Description>
              Located at the heart of New York City, Audiophile is the premier store for high end
              headphones, earphones, speakers, and audio accessories. We have a large showroom and
              luxury demonstration rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic people who make
              Audiophile the best place to buy your portable audio equipment.
            </S.Description>
          </S.Content>
        </S.Col>

        <S.Col>
          <S.MobileImage>
            <Image alt="" role="presentation" src={AboutBg} layout="fill" objectFit="cover" />
          </S.MobileImage>
          <S.DesktopImage>
            <Image alt="" role="presentation" src={AboutBg} layout="fill" objectFit="cover" />
          </S.DesktopImage>
        </S.Col>
      </S.ContainerRow>
    </S.AboutWrapper>
  );
}

export default About;

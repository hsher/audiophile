import Image from "next/image";
import HeroImage from "public/HeroImage.png";
import ButtonAction from "src/design-system/components/ButtonAction";
import { actionElements } from "src/design-system/constants";

import * as S from "./styled";

function HeroSection() {
  return (
    <S.HeroWrapper>
      <S.Column>
        <S.Content>
          <S.SmallTitle>NEW PRODUCT</S.SmallTitle>
          <S.PageTitle>XX99 Mark II Headphones</S.PageTitle>

          <S.Description>
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </S.Description>

          <S.ButtonWrapper>
            <ButtonAction element={actionElements.A} href="/">
              See product
            </ButtonAction>
          </S.ButtonWrapper>
        </S.Content>
      </S.Column>

      <S.Column>
        <S.DesktopImage>
          <Image
            alt=""
            height={530}
            role="presentation"
            src={HeroImage}
            width={530}
            objectFit="cover"
          />
        </S.DesktopImage>
      </S.Column>
    </S.HeroWrapper>
  );
}

export default HeroSection;

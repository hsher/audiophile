import Image from "next/image";
import SecondProductBg from "public/SecondProductBg.jpg";
import SecondProductBgTablet from "public/SecondProductBgTablet.jpg";
import ButtonAction from "src/design-system/components/ButtonAction";
import { actionElements, buttonActionThemes } from "src/design-system/constants";

import * as S from "./styled";

function SecondProduct() {
  return (
    <S.SecondProductWrapper>
      <S.ContainerRow>
        <S.TabletImage>
          <Image
            src={SecondProductBgTablet}
            alt=""
            role="presentation"
            layout="responsive"
            objectFit="cover"
            width="688"
            height="320"
          />
        </S.TabletImage>
        <S.DesktopImage>
          <Image alt="" role="presentation" src={SecondProductBg} layout="fill" objectFit="cover" />
        </S.DesktopImage>

        <S.Content>
          <S.SectionTitle>ZX7 SPEAKER</S.SectionTitle>

          <S.ButtonWrapper>
            <ButtonAction element={actionElements.A} href="/" theme={buttonActionThemes.SECONDARY}>
              See product
            </ButtonAction>
          </S.ButtonWrapper>
        </S.Content>
      </S.ContainerRow>
    </S.SecondProductWrapper>
  );
}

export default SecondProduct;

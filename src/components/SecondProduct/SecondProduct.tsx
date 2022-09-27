import Image from "next/image";
import SecondProductBg from "public/SecondProductBg.jpg";
import ButtonAction from "src/design-system/components/ButtonAction";
import { actionElements, buttonActionThemes } from "src/design-system/constants";

import * as S from "./styled";

function SecondProduct() {
  return (
    <S.SecondProductWrapper>
      <S.ContainerRow>
        <S.MobileImage>
          <Image alt="" role="presentation" src={SecondProductBg} layout="fill" objectFit="cover" />
        </S.MobileImage>
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

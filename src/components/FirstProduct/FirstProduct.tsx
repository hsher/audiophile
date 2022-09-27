import Image from "next/image";
import FirstProductBg from "public/FirstProductBg.jpg";
import ButtonAction from "src/design-system/components/ButtonAction";
import { actionElements, buttonActionThemes } from "src/design-system/constants";

import * as S from "./styled";

function FirstProduct() {
  return (
    <S.FirstProductWrapper>
      <S.ContainerRow>
        <S.MobileImage>
          <Image alt="" role="presentation" src={FirstProductBg} layout="fill" objectFit="cover" />
        </S.MobileImage>
        <S.DesktopImage>
          <Image alt="" role="presentation" src={FirstProductBg} layout="fill" objectFit="cover" />
        </S.DesktopImage>

        <S.Content>
          <S.SectionTitle>ZX9 SPEAKER</S.SectionTitle>

          <S.Description>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
            sound.
          </S.Description>

          <S.ButtonWrapper>
            <ButtonAction element={actionElements.A} href="/" theme={buttonActionThemes.SECONDARY}>
              See product
            </ButtonAction>
          </S.ButtonWrapper>
        </S.Content>
      </S.ContainerRow>
    </S.FirstProductWrapper>
  );
}

export default FirstProduct;

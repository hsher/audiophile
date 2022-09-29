import Image from "next/image";
import ThirdProductBg from "public/ThirdProductBg.jpg";
import ThirdProductBgTablet from "public/ThirdProductBgTablet.jpg";
import ButtonAction from "src/design-system/components/ButtonAction";
import { actionElements, buttonActionThemes } from "src/design-system/constants";

import * as S from "./styled";

function ThirdProduct() {
  return (
    <S.ThirdProductWrapper>
      <S.ContainerRow>
        <S.Col>
          <S.TabletImage>
            <Image
              src={ThirdProductBgTablet}
              alt=""
              role="presentation"
              layout="responsive"
              objectFit="cover"
              width="339"
              height="320"
            />
          </S.TabletImage>
          <S.DesktopImage>
            <Image
              alt=""
              role="presentation"
              src={ThirdProductBg}
              layout="fill"
              objectFit="cover"
            />
          </S.DesktopImage>
        </S.Col>

        <S.Col>
          <S.Content>
            <S.SectionTitle>YX1 EARPHONES</S.SectionTitle>

            <S.ButtonWrapper>
              <ButtonAction
                element={actionElements.A}
                href="/"
                theme={buttonActionThemes.SECONDARY}
              >
                See product
              </ButtonAction>
            </S.ButtonWrapper>
          </S.Content>
        </S.Col>
      </S.ContainerRow>
    </S.ThirdProductWrapper>
  );
}

export default ThirdProduct;

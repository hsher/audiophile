import Image from "next/image";
import AboutBg from "public/AboutBg.jpg";
import ButtonAction from "src/design-system/components/ButtonAction";
import { actionElements } from "src/design-system/constants";

import * as S from "./styled";

function CategoryProductCard() {
  return (
    <S.CategoryProductCardWrapper>
      <S.ContainerRow>
        <S.Col>
          <S.DesktopImage>
            <Image
              src={AboutBg}
              alt=""
              role="presentation"
              layout="responsive"
              objectFit="cover"
              width="540"
              height="560"
            />
          </S.DesktopImage>
        </S.Col>

        <S.Col>
          <S.Content>
            <S.SmallTitle>NEW PRODUCT</S.SmallTitle>
            <S.PageTitle>XX99 Mark II Headphones</S.PageTitle>

            <S.Description>
              Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.
            </S.Description>

            <S.ButtonWrapper>
              <ButtonAction element={actionElements.A} href="/">
                See product
              </ButtonAction>
            </S.ButtonWrapper>
          </S.Content>
        </S.Col>
      </S.ContainerRow>
    </S.CategoryProductCardWrapper>
  );
}

export default CategoryProductCard;

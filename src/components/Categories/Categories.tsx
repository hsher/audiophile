import Image from "next/image";
import chevroneRight from "public/chevrone-right.svg";
import ButtonAction from "src/design-system/components/ButtonAction";
import { actionElements, buttonActionThemes } from "src/design-system/constants";
import { SecondarySmall } from "src/design-system/typography";
import { categories } from "src/mocks/categories";

import * as S from "./styled";

function Categories() {
  return (
    <S.CategoryWrapper>
      {categories.map(
        ({
          image,
          imageHeight,
          imageMWeb,
          imageMWebHeight,
          imageMWebWidth,
          imageWidth,
          name,
          path,
        }) => (
          <S.Category key={path}>
            <S.ImageWrapper>
              <Image
                alt=""
                role="presentation"
                src={image}
                height={imageHeight}
                width={imageWidth}
              />
            </S.ImageWrapper>
            <S.ImageWrapperMWeb>
              <Image
                alt=""
                role="presentation"
                src={imageMWeb}
                height={imageMWebHeight}
                width={imageMWebWidth}
              />
            </S.ImageWrapperMWeb>
            <S.Shadow />
            <SecondarySmall as="p">{name}</SecondarySmall>
            <ButtonAction
              element={actionElements.A}
              href={path}
              theme={buttonActionThemes.TERTIARY}
            >
              <S.LinkText>Shop</S.LinkText>
              <Image alt="" role="presentation" src={chevroneRight} height={12} width={8} />
            </ButtonAction>
          </S.Category>
        )
      )}
    </S.CategoryWrapper>
  );
}

export default Categories;

import Image from "next/image";
import chevroneRight from "public/chevrone-right.svg";
import earphones from "public/earphones.png";
import earphonesMWeb from "public/earphonesMWeb.png";
import headphones from "public/headphones.png";
import headphonesMWeb from "public/headphonesMWeb.png";
import speakers from "public/speakers.png";
import speakersMWeb from "public/speakersMWeb.png";
import ButtonAction from "src/design-system/components/ButtonAction";
import { actionElements, buttonActionThemes } from "src/design-system/constants";
import { SecondarySmall } from "src/design-system/typography";

import * as S from "./styled";

function Categories() {
  const categories = [
    {
      name: "Headphones",
      image: headphones,
      imageMWeb: headphonesMWeb,
      imageHeight: 160,
      imageMWebHeight: 104,
      imageWidth: 124,
      imageMWebWidth: 80,
      path: "/#headphones",
    },
    {
      name: "Speakers",
      image: speakers,
      imageMWeb: speakersMWeb,
      imageHeight: 147,
      imageMWebHeight: 101,
      imageWidth: 123,
      imageMWebWidth: 85,
      path: "/#speakers",
    },
    {
      name: "Earphones",
      image: earphones,
      imageMWeb: earphonesMWeb,
      imageHeight: 125,
      imageMWebHeight: 104,
      imageWidth: 126,
      imageMWebWidth: 103,
      path: "/#earphones",
    },
  ];

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

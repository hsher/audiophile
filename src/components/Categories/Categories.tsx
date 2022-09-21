import Image from "next/image";
import chevroneRight from "public/chevrone-right.svg";
import earphones from "public/earphones.png";
import headphones from "public/headphones.png";
import speakers from "public/speakers.png";
import ButtonAction from "src/design-system/components/ButtonAction";
import { actionElements, buttonActionThemes } from "src/design-system/constants";
import { SecondarySmall } from "src/design-system/typography";

import * as S from "./styled";

function Categories() {
  const categories = [
    {
      name: "Headphones",
      image: headphones,
      imageHeight: 160,
      imageWidth: 124,
      path: "/#headphones",
    },
    {
      name: "Speakers",
      image: speakers,
      imageHeight: 147,
      imageWidth: 123,
      path: "/#speakers",
    },
    {
      name: "Earphones",
      image: earphones,
      imageHeight: 125,
      imageWidth: 126,
      path: "/#earphones",
    },
  ];

  return (
    <S.CategoryWrapper>
      {categories.map(({ image, imageHeight, imageWidth, name, path }) => (
        <S.Category key={path}>
          <S.ImageWrapper>
            <Image alt="" role="presentation" src={image} height={imageHeight} width={imageWidth} />
          </S.ImageWrapper>
          <S.Shadow />
          <SecondarySmall>{name}</SecondarySmall>
          <ButtonAction element={actionElements.A} href={path} theme={buttonActionThemes.TERTIARY}>
            <S.LinkText>Shop</S.LinkText>
            <Image alt="" role="presentation" src={chevroneRight} height={12} width={8} />
          </ButtonAction>
        </S.Category>
      ))}
    </S.CategoryWrapper>
  );
}

export default Categories;

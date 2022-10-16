import * as S from "./styled";

function SecondaryHeroSection(props: SecondaryHeroSectionProps) {
  const { children, ...passThroughProps } = props;

  return (
    <S.HeroWrapper {...passThroughProps}>
      <S.PageTitle>{children}</S.PageTitle>
    </S.HeroWrapper>
  );
}

interface SecondaryHeroSectionProps {
  children: string;
}

export default SecondaryHeroSection;

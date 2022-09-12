import * as S from "./styled";

function Container({ children, ...passThroughProps }) {
  return <S.Container {...passThroughProps}>{children}</S.Container>;
}

export default Container;

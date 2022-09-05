import * as S from "./styled";

export default function Layout({ children }) {
  return (
    <>
      <S.GlobalStyle />
      <S.Main>{children}</S.Main>
    </>
  );
}

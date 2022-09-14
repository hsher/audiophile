import Header from "src/components/Header";

import * as S from "./styled";

export default function Layout({ children }) {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <S.Main>{children}</S.Main>
    </>
  );
}

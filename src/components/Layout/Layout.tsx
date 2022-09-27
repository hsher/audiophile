import Footer from "src/components/Footer";
import Header from "src/components/Header";

import * as S from "./styled";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <S.GlobalStyle />
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

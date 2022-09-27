import * as S from "./styled";

function Container(props: ContainerProps) {
  const { children, element, ...passThroughProps } = props;

  return (
    <S.Container as={element} {...passThroughProps}>
      {children}
    </S.Container>
  );
}

Container.defaultProps = {
  element: null,
};

interface ContainerProps {
  children: React.ReactNode;
  element?: string;
}

export default Container;

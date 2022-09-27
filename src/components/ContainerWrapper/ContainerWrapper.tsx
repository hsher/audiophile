import * as S from "./styled";

function ContainerWrapper(props: ContainerWrapperProps) {
  const { backgroundColor, children, element, ...passThroughProps } = props;

  return (
    <S.ContainerWrapper as={element} backgroundColor={backgroundColor} {...passThroughProps}>
      {children}
    </S.ContainerWrapper>
  );
}

ContainerWrapper.defaultProps = {
  backgroundColor: "transparent",
  element: null,
};

interface ContainerWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  element?: string;
}

export default ContainerWrapper;

import { string } from "prop-types";

import * as S from "./styled";

function ContainerWrapper({ backgroundColor, children, ...passThroughProps }) {
  return (
    <S.ContainerWrapper backgroundColor={backgroundColor} {...passThroughProps}>
      {children}
    </S.ContainerWrapper>
  );
}

export default ContainerWrapper;

ContainerWrapper.propTypes = {
  backgroundColor: string,
};

ContainerWrapper.defaultProps = {
  backgroundColor: "transparent",
};

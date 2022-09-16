import { actionElements, buttonActionThemes } from "src/design-system/constants";

import * as S from "./styled";

function ButtonAction(props: ButtonActionProps) {
  const { children, element, href, onClick, theme, type, ...passThroughProps } = props;

  return (
    <S.ButtonActionBase
      as={element}
      href={element === actionElements.A ? href : null}
      onClick={onClick}
      theme={theme}
      type={element === actionElements.BUTTON ? type : null}
      {...passThroughProps}
    >
      {children}
    </S.ButtonActionBase>
  );
}

ButtonAction.defaultProps = {
  element: actionElements.BUTTON,
  href: null,
  onClick: () => null,
  theme: buttonActionThemes.PRIMARY,
  type: null,
};

interface ButtonActionProps {
  children: React.ReactNode;
  element?: Element;
  href?: string;
  onClick?: () => void;
  theme?: Theme;
  type?: "button" | "submit" | "reset";
}

type Element = typeof actionElements[keyof typeof actionElements];
type Theme = typeof buttonActionThemes[keyof typeof buttonActionThemes];

export default ButtonAction;

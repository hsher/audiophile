import { actionElements, buttonActionThemes } from "src/design-system/constants";

import * as S from "./styled";

function ButtonAction(props: ButtonActionProps) {
  const { children, element, href, onClick, theme, type, ...passThroughProps } = props;
  let typeResult;
  let hrefResult;

  if (element === actionElements.A) {
    hrefResult = href;
    typeResult = null;
  } else if (element === actionElements.BUTTON || element === null) {
    hrefResult = null;
    typeResult = type || "submit";
  }

  return (
    <S.ButtonActionBase
      as={element}
      href={hrefResult}
      onClick={onClick}
      theme={theme}
      type={typeResult}
      {...passThroughProps}
    >
      {children}
    </S.ButtonActionBase>
  );
}

ButtonAction.defaultProps = {
  element: null,
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

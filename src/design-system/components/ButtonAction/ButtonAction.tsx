import { func, node, oneOf } from "prop-types";
import { actionElements, buttonActionThemes } from "src/design-system/constants";

import * as S from "./styled";

function ButtonAction({ children, element, href, onClick, theme, type, ...passThroughProps }) {
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

ButtonAction.propTypes = {
  children: node.isRequired,
  /*
   * ButtonAction can be configured to render either an HTML anchor element or
   * and HTML button element.
   *
   *  By default, ButtonAction will render a button element.
   * Valid element types are referenced through the actionElements enum:
   * "design-system/constants/actionElements".
   * */
  element: oneOf(Object.values(actionElements)),
  /**
   * When ButtonAction renders an anchor element, href is required
   * */
  href: (props) => {
    if (!props.href && props.element === actionElements.A) {
      return new Error("The href prop is required when ButtonAction is a link");
    }

    if (typeof props.href !== "string" && props.element === actionElements.A) {
      return new Error("href must be a string");
    }

    return null;
  },
  onClick: func,
  type: oneOf(["button", "submit", "reset"]),
  /**
   * Determines background and text color of ButtonAction.
   * Values for the theme prop are imported from the buttonActionThemes.
   * */
  theme: oneOf(Object.values(buttonActionThemes)),
};

ButtonAction.defaultProps = {
  element: actionElements.BUTTON,
  href: null,
  onClick: null,
  theme: buttonActionThemes.PRIMARY,
  type: "submit",
};

export default ButtonAction;

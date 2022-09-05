import { func, node, oneOf } from "prop-types";
import { buttonActionElements, buttonActionThemes } from "src/design-system/constants";

import * as S from "./styled";

function ButtonAction({ children, element, href, onClick, theme, type, ...passThroughProps }) {
  return (
    <S.ButtonActionBase
      as={element}
      href={element === buttonActionElements.a ? href : null}
      onClick={onClick}
      theme={theme}
      type={element === buttonActionElements.button ? type : null}
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
   * Valid element types are referenced through the buttonActionElements enum:
   * "design-system/constants/buttonbuttonActionElements".
   * */
  element: oneOf(Object.values(buttonActionElements)),
  /**
   * When ButtonAction renders an anchor element, href is required
   * */
  href: (props) => {
    if (!props.href && props.element === buttonActionElements.a) {
      return new Error("The href prop is required when ButtonAction is a link");
    }

    if (typeof props.href !== "string" && props.element === buttonActionElements.a) {
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
  element: buttonActionElements.button,
  href: null,
  onClick: null,
  theme: buttonActionThemes.PRIMARY,
  type: "submit",
};

export default ButtonAction;

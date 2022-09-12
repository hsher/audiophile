import { fireEvent, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { OCHRE } from "src/design-system/colors";
import { actionElements, buttonActionThemes } from "src/design-system/constants";
import { toHaveValidHTML } from "src/test-utilities";

import ButtonAction from "./ButtonAction";

expect.extend(toHaveNoViolations);
expect.extend({ toHaveValidHTML });

const defaultProps = {
  children: "Hello world!",
  href: "https://google.com/",
  onClick: () => {},
};

const renderComponent = (overrideProps = {}) =>
  render(<ButtonAction {...defaultProps} {...overrideProps} />);

describe("<ButtonAction />", () => {
  it("Passes Axe Core when ButtonAction is a button", async () => {
    render(<ButtonAction {...defaultProps} />, document.body);

    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });

  it("Passes Axe Core when ButtonAction is a link", async () => {
    render(
      <main>
        <ButtonAction {...defaultProps} element={actionElements.a} />
      </main>,
      document.body
    );

    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });

  it("has valid HTML when ButtonAction is a button", () => {
    const component = renderComponent();

    expect(component).toHaveValidHTML();
  });

  it("has valid HTML when ButtonAction is a link", () => {
    const component = renderComponent({ element: actionElements.a });

    expect(component).toHaveValidHTML();
  });

  describe("element prop", () => {
    it("is actionElements.button by default", () => {
      const component = renderComponent();

      expect(component.getByRole(actionElements.button)).toBeInTheDocument();
    });

    it("renders a link when value is set to actionElements.a", () => {
      const component = renderComponent({ element: actionElements.a });

      expect(component.getByRole("link")).toBeInTheDocument();
    });

    it("renders a button when value is set to actionElements.button", () => {
      const component = renderComponent();

      expect(component.getByRole(actionElements.button)).toBeInTheDocument();
    });
  });

  describe("href prop", () => {
    it("applies href attribute when ButtonAction is a link", () => {
      const href = "www.goggles.com";
      const component = renderComponent({ element: actionElements.a, href });

      expect(component.getByRole("link")).toHaveAttribute("href", href);
    });

    it("does not apply href attribute when ButtonAction is a button", () => {
      const href = "www.goggles.com";
      const component = renderComponent({ element: actionElements.button, href });

      expect(component.getByRole(actionElements.button)).not.toHaveAttribute("href", href);
    });
  });

  describe("type prop", () => {
    it("does not apply type attribute when ButtonAction is a link", () => {
      const type = "button";
      const component = renderComponent({ element: actionElements.a, type });

      expect(component.getByRole("link")).not.toHaveAttribute("type", type);
    });

    it("applies type attribute when ButtonAction is a button", () => {
      const type = "button";
      const component = renderComponent({ element: actionElements.button, type });

      expect(component.getByRole(actionElements.button)).toHaveAttribute("type", type);
    });

    it("is 'submit' by default when ButtonAction is a button", () => {
      const type = "submit";
      const component = renderComponent({ element: actionElements.button });

      expect(component.getByRole(actionElements.button)).toHaveAttribute("type", type);
    });
  });

  describe("onClick prop", () => {
    it("applies the onClick handler when ButtonAction is a link", () => {
      const handleClick = jest.fn();
      const component = renderComponent({
        element: actionElements.a,
        onClick: handleClick,
      });

      fireEvent.click(component.getByRole("link"));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("applies onClick handler when ButtonAction is a button", () => {
      const handleClick = jest.fn();
      const component = renderComponent({
        element: actionElements.button,
        onClick: handleClick,
      });

      fireEvent.click(component.getByRole(actionElements.button));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("children prop", () => {
    it("renders children when ButtonAction is a link", () => {
      const children = "Hey there!";
      const component = renderComponent({ element: actionElements.a, children });

      expect(component.getByRole("link")).toHaveTextContent(children);
    });

    it("renders children when ButtonAction is a button", () => {
      const children = "Hey there!";
      const component = renderComponent({ element: actionElements.button, children });

      expect(component.getByRole(actionElements.button)).toHaveTextContent(children);
    });
  });

  describe("theme prop", () => {
    it("is PRIMARY by default", () => {
      const component = renderComponent();

      expect(component.getByRole(actionElements.button)).toHaveStyle(`background-color: ${OCHRE};`);
    });

    it("takes TERTIARY by prop", () => {
      const component = renderComponent({ theme: buttonActionThemes.TERTIARY });

      expect(component.getByRole(actionElements.button)).toHaveStyle(
        `background-color: transparent;`
      );
    });
  });

  describe("...passThroughProps", () => {
    it("takes ...passThroughProps", () => {
      const propName = "data-test";
      const propValue = "pizza";
      const passThroughProps = { [propName]: propValue };
      const component = renderComponent({ ...passThroughProps });

      expect(component.getByRole(actionElements.button)).toHaveAttribute(propName, propValue);
    });
  });
});

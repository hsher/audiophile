import { fireEvent, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { OCHRE } from "src/design-system/colors";
import { buttonActionElements, buttonActionThemes } from "src/design-system/constants";
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
        <ButtonAction {...defaultProps} element={buttonActionElements.a} />
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
    const component = renderComponent({ element: buttonActionElements.a });

    expect(component).toHaveValidHTML();
  });

  describe("element prop", () => {
    it("is buttonActionElements.button by default", () => {
      const component = renderComponent();

      expect(component.getByRole(buttonActionElements.button)).toBeInTheDocument();
    });

    it("renders a link when value is set to buttonActionElements.a", () => {
      const component = renderComponent({ element: buttonActionElements.a });

      expect(component.getByRole("link")).toBeInTheDocument();
    });

    it("renders a button when value is set to buttonActionElements.button", () => {
      const component = renderComponent();

      expect(component.getByRole(buttonActionElements.button)).toBeInTheDocument();
    });
  });

  describe("href prop", () => {
    it("applies href attribute when ButtonAction is a link", () => {
      const href = "www.goggles.com";
      const component = renderComponent({ element: buttonActionElements.a, href });

      expect(component.getByRole("link")).toHaveAttribute("href", href);
    });

    it("does not apply href attribute when ButtonAction is a button", () => {
      const href = "www.goggles.com";
      const component = renderComponent({ element: buttonActionElements.button, href });

      expect(component.getByRole(buttonActionElements.button)).not.toHaveAttribute("href", href);
    });
  });

  describe("type prop", () => {
    it("does not apply type attribute when ButtonAction is a link", () => {
      const type = "button";
      const component = renderComponent({ element: buttonActionElements.a, type });

      expect(component.getByRole("link")).not.toHaveAttribute("type", type);
    });

    it("applies type attribute when ButtonAction is a button", () => {
      const type = "button";
      const component = renderComponent({ element: buttonActionElements.button, type });

      expect(component.getByRole(buttonActionElements.button)).toHaveAttribute("type", type);
    });

    it("is 'submit' by default when ButtonAction is a button", () => {
      const type = "submit";
      const component = renderComponent({ element: buttonActionElements.button });

      expect(component.getByRole(buttonActionElements.button)).toHaveAttribute("type", type);
    });
  });

  describe("onClick prop", () => {
    it("applies the onClick handler when ButtonAction is a link", () => {
      const handleClick = jest.fn();
      const component = renderComponent({
        element: buttonActionElements.a,
        onClick: handleClick,
      });

      fireEvent.click(component.getByRole("link"));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("applies onClick handler when ButtonAction is a button", () => {
      const handleClick = jest.fn();
      const component = renderComponent({
        element: buttonActionElements.button,
        onClick: handleClick,
      });

      fireEvent.click(component.getByRole(buttonActionElements.button));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("children prop", () => {
    it("renders children when ButtonAction is a link", () => {
      const children = "Hey there!";
      const component = renderComponent({ element: buttonActionElements.a, children });

      expect(component.getByRole("link")).toHaveTextContent(children);
    });

    it("renders children when ButtonAction is a button", () => {
      const children = "Hey there!";
      const component = renderComponent({ element: buttonActionElements.button, children });

      expect(component.getByRole(buttonActionElements.button)).toHaveTextContent(children);
    });
  });

  describe("theme prop", () => {
    it("is PRIMARY by default", () => {
      const component = renderComponent();

      expect(component.getByRole(buttonActionElements.button)).toHaveStyle(
        `background-color: ${OCHRE};`
      );
    });

    it("takes TERTIARY by prop", () => {
      const component = renderComponent({ theme: buttonActionThemes.TERTIARY });

      expect(component.getByRole(buttonActionElements.button)).toHaveStyle(
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

      expect(component.getByRole(buttonActionElements.button)).toHaveAttribute(propName, propValue);
    });
  });
});

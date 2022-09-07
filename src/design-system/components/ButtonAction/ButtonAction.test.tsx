import { fireEvent, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { buttonActionElements } from "src/design-system/constants";
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
  describe("Accessibility", () => {
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
  });

  describe("HTML Validation", () => {
    it("has valid HTML when ButtonAction is a button", () => {
      const component = renderComponent();

      expect(component).toHaveValidHTML();
    });

    it("has valid HTML when ButtonAction is a link", () => {
      const component = renderComponent({ element: buttonActionElements.a });

      expect(component).toHaveValidHTML();
    });
  });

  describe("props", () => {
    describe("element", () => {
      it("is buttonActionElements.button by default", () => {
        const component = renderComponent();

        expect(component.getByRole(buttonActionElements.button)).toBeInTheDocument();
      });

      it("renders a link when value is set to link", () => {
        const component = renderComponent({ element: buttonActionElements.a });

        expect(component.getByRole("link")).toBeInTheDocument();
      });

      it("renders a button when value is set to button", () => {
        const component = renderComponent();

        expect(component.getByRole(buttonActionElements.button)).toBeInTheDocument();
      });
    });

    describe("href", () => {
      describe("when ButtonAction is a link", () => {
        it("applies href attribute", () => {
          const href = "www.goggles.com";
          const component = renderComponent({ element: buttonActionElements.a, href });

          expect(component.getByRole("link")).toHaveAttribute("href", href);
        });
      });

      describe("when ButtonAction is a button", () => {
        it("does not apply href attribute", () => {
          const href = "www.goggles.com";
          const component = renderComponent({ element: buttonActionElements.button, href });

          expect(component.getByRole(buttonActionElements.button)).not.toHaveAttribute(
            "href",
            href
          );
        });
      });
    });

    describe("type", () => {
      describe("when ButtonAction is a link", () => {
        it("does not apply type attribute", () => {
          const type = "button";
          const component = renderComponent({ element: buttonActionElements.a, type });

          expect(component.getByRole("link")).not.toHaveAttribute("type", type);
        });
      });

      describe("when ButtonAction is a button", () => {
        it("applies type attribute", () => {
          const type = "button";
          const component = renderComponent({ element: buttonActionElements.button, type });

          expect(component.getByRole(buttonActionElements.button)).toHaveAttribute("type", type);
        });

        it("is 'submit' by default", () => {
          const type = "submit";
          const component = renderComponent({ element: buttonActionElements.button });

          expect(component.getByRole(buttonActionElements.button)).toHaveAttribute("type", type);
        });
      });
    });

    describe("onClick", () => {
      describe("when ButtonAction is a link", () => {
        it("applies the onClick handler", () => {
          const handleClick = jest.fn();
          const component = renderComponent({
            element: buttonActionElements.a,
            onClick: handleClick,
          });

          fireEvent.click(component.getByRole("link"));

          expect(handleClick).toHaveBeenCalledTimes(1);
        });
      });

      describe("when ButtonAction is a button", () => {
        it("applies onClick handler", () => {
          const handleClick = jest.fn();
          const component = renderComponent({
            element: buttonActionElements.button,
            onClick: handleClick,
          });

          fireEvent.click(component.getByRole(buttonActionElements.button));

          expect(handleClick).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe("children", () => {
      describe("when ButtonAction is a link", () => {
        it("renders children", () => {
          const children = "Hey there!";
          const component = renderComponent({ element: buttonActionElements.a, children });

          expect(component.getByRole("link")).toHaveTextContent(children);
        });
      });

      describe("when ButtonAction is a button", () => {
        it("renders children", () => {
          const children = "Hey there!";
          const component = renderComponent({ element: buttonActionElements.button, children });

          expect(component.getByRole(buttonActionElements.button)).toHaveTextContent(children);
        });
      });
    });
  });
});

import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { toHaveValidHTML } from "src/test-utilities";

import About from "./About";

expect.extend(toHaveNoViolations);
expect.extend({ toHaveValidHTML });

const renderComponent = (overrideProps = {}) => render(<About {...overrideProps} />);

describe("<About />", () => {
  it("Passes Axe Core", async () => {
    const component = render(<About />);
    const a11yTestResults = await axe(component.container);

    expect(a11yTestResults).toHaveNoViolations();
  });

  it("has valid HTML", () => {
    const component = renderComponent();

    expect(component).toHaveValidHTML({
      rules: {
        "no-inline-style": ["warn", { allowedProperties: ["width", "height"] }],
      },
    });
  });
});

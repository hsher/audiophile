import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { toHaveValidHTML } from "src/test-utilities";

import Homepage from "./Homepage";

expect.extend(toHaveNoViolations);
expect.extend({ toHaveValidHTML });

const renderComponent = (overrideProps = {}) => render(<Homepage {...overrideProps} />);

describe("<Homepage />", () => {
  it("Passes Axe Core", async () => {
    const component = render(<Homepage />);
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

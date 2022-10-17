import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { toHaveValidHTML } from "src/test-utilities";

import CategoryProductCard from "./CategoryProductCard";

expect.extend(toHaveNoViolations);
expect.extend({ toHaveValidHTML });

const renderComponent = (overrideProps = {}) => render(<CategoryProductCard {...overrideProps} />);

describe("<CategoryProductCard />", () => {
  it("Passes Axe Core", async () => {
    const component = render(<CategoryProductCard />);
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

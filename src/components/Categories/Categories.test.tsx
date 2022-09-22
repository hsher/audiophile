import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { toHaveValidHTML } from "src/test-utilities";

import Categories from "./Categories";

expect.extend(toHaveNoViolations);
expect.extend({ toHaveValidHTML });

const renderComponent = (overrideProps = {}) => render(<Categories {...overrideProps} />);

describe("<Categories />", () => {
  it("Passes Axe Core when", async () => {
    render(
      <main>
        <Categories />
      </main>,
      document.body
    );

    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
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

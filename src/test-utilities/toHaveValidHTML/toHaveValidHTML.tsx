import { HtmlValidate } from "html-validate";

const defaultConfig = {
  extends: ["html-validate:recommended"],
  rules: {
    // allow boolean unary html attributes (e.g. checked) to have values
    "attribute-boolean-style": 0,
  },
};

/**
 * Intended Usage
 *
 * import { mount } from "enzyme"
 * import { toHaveValidHTML } from "@streeteasy/design-system/test-utilities";
 *
 * expect.extend({ toHaveValidHTML });
 *
 * describe("HTML validation", () => {
 *   it("has valid html", () {
 *     const component = mount(<SomeComponent />);
 *
 *     expect(component).toHaveValidHTML();
 *   });
 * })
 *
 * Passing a Custom Validation Config
 *
 * We can pass a custom validation config as an argument to toHaveValidHTML(). This could
 * be useful if we need to skip a specific rule, or overwrite an Axe default.
 *
 * Example:
 *
 * const config = {
 *   extends: ["html-validate:recommended"],
 *   rules: {
 *     "element-permitted-content": 0
 *   }
 * };
 *
 * expect(component).toHaveValidHTML(config);
 * */

const extractHTML = (component) => {
  let html;

  if (component.html && typeof component.html === "function") {
    html = component.html();
  } else if (component.baseElement && component.baseElement.innerHTML) {
    html = component.baseElement.innerHTML;
  } else if (typeof component === "string") {
    html = component;
  } else {
    throw new Error("Can not extract html");
  }

  return html;
};

const toHaveValidHTML = (component, config = defaultConfig) => {
  const validate = new HtmlValidate(config);
  const html = extractHTML(component);
  const report = validate.validateString(html);

  if (report.valid) {
    return {
      pass: true,
    };
  }

  return {
    message: () => {
      const violationDescriptions = report.results.reduce((acc, violation) => {
        const messages = violation.messages.map(({ message }) => `\u2022 ${message}`).join("\n");
        return acc.concat(`${messages}\n`);
      }, "");

      return `Component failed HTML validation with the following errors:
      \x1b[31m${"\n"}${violationDescriptions}\x1b[0m`;
    },
    pass: false,
  };
};

export default toHaveValidHTML;

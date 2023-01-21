import { generateID } from "../index";

describe("test generateID", () => {
  it("test if generateID generate random value", () => {
    expect(generateID()).toBeLessThan(10);
    expect(generateID()).toBeGreaterThan(0);
  });
});

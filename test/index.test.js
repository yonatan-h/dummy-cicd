import { expect, test } from "@jest/globals";
import { add } from "../src/utils.js"; // Ensure `.js` extension is included

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

import { sum } from "../src/index";

test("Test sum returns sum of 4 and 5", () => {
    expect(
        sum(4, 5)
    ).toBe(9);
});

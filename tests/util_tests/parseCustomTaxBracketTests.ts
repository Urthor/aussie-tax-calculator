import {parseCustomTaxBracket} from "../../src/utils";
import {taxBracket20202021} from "../../src/constants";

test("Test custom tax brackets with compliant format", () => {

    let customBracket = "18200: 0, 45000: 0.19, 120000: 0.325, 180000: 0.37, Maximum: 0.45"

    let parsedCustomBracket = parseCustomTaxBracket(customBracket);

    expect(parsedCustomBracket).toEqual(taxBracket20202021);
});

test("Test custom tax brackets with compliant foreign income format.", () => {
    let customBracket = "120000: 0.325, 180000: 0.37, Maximum: 0.45";

    let parsedCustomBracket = parseCustomTaxBracket(customBracket);
    let expectedBracket = new Map<number, number>([
        [120000, 0.325],
        [180000, 0.37],
        [Number.MAX_SAFE_INTEGER, 0.45],
    ]);

    expect(parsedCustomBracket).toEqual(expectedBracket);
});

test("Test custom tax brackets with compliant format", () => {

    let customBracket = "18200: 0, 45000: 0.19, 120000: 0.325, 180000: 0.37, Maximum: 0.45"

    let parsedCustomBracket = parseCustomTaxBracket(customBracket);

    expect(parsedCustomBracket).toEqual(taxBracket20202021);
});

test("Test custom tax brackets with compliant format", () => {

    let customBracket = "18200: 0, 45000: 0.19, 120000: 0.325, 180000: 0.37, Maximum: 0.45"

    let parsedCustomBracket = parseCustomTaxBracket(customBracket);

    expect(parsedCustomBracket).toEqual(taxBracket20202021);
});

test("Test custom tax brackets with compliant format", () => {

    let customBracket = "18200: 0, 45000: 0.19, 120000: 0.325, 180000: 0.37, Maximum: 0.45"

    let parsedCustomBracket = parseCustomTaxBracket(customBracket);

    expect(parsedCustomBracket).toEqual(taxBracket20202021);
});

test("Test custom tax brackets with compliant format", () => {

    let customBracket = "18200: 0, 45000: 0.19, 120000: 0.325, 180000: 0.37, Maximum: 0.45"

    let parsedCustomBracket = parseCustomTaxBracket(customBracket);

    expect(parsedCustomBracket).toEqual(taxBracket20202021);
});

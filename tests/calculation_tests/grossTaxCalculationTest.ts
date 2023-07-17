import {taxBracket20152016, taxBracket20202021} from "../../src/constants";
import {calculateGrossTax} from "../../src/calculations";
import {parseCustomTaxBracket} from "../../src/utils";

test("Test gross tax calculation for default tax bracket 2020-2022", () => {
    let taxBracket = taxBracket20202021;
    let income = 100000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(22967.00);
});

test("Test gross tax calculation for odd number tax bracket 2020-2022", () => {
    let taxBracket = taxBracket20202021;
    let income = 4678855626;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(2105455698.70);
});

test("Test gross tax calculation for default tax bracket below low income threshold 2021-2022", () => {
    let taxBracket = taxBracket20202021;
    let income = 10000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(0);
});

test("Test gross tax calculation for middle tax bracket 2021-2022", () => {
    let taxBracket = taxBracket20202021;
    let income = 50000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(6717.00);
});

test("Test gross tax calculation for 2015-2016 tax bracket", () => {
    let taxBracket = taxBracket20152016;
    let income = 100000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(24947.00);
});

test("Test gross tax calculation for high income 2020-2021", () => {
    let taxBracket = taxBracket20202021;
    let income = 1000000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(420667.00);
});

test("Test gross tax calculation for high income 2020-2021", () => {
    let taxBracket = taxBracket20202021;
    let income = 1000000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(420667.00);
});
test("Test with foreign tax brackets.", () => {
    let customBracket = "120000: 0.325, 180000: 0.37, Maximum: 0.45"
    let parsedCustomBracket = parseCustomTaxBracket(customBracket);

    let income = 100000;

    let grossTax = calculateGrossTax(income, parsedCustomBracket);

    expect(grossTax).toEqual(32500.00);
});
test("Test gross tax calculation for foreign tax brackets high income 2020-2021", () => {
    let customBracket = "120000: 0.325, 180000: 0.37, Maximum: 0.45"
    let parsedCustomBracket = parseCustomTaxBracket(customBracket);

    let income = 7777777;

    let grossTax = calculateGrossTax(income, parsedCustomBracket);

    expect(grossTax).toEqual(3480199.65);
});

test("Test gross tax calculation for foreign tax brackets high income 2020-2021", () => {
    let customBracket = "120000: 0.325, 180000: 0.37, Maximum: 0.45"
    let parsedCustomBracket = parseCustomTaxBracket(customBracket);

    let income = 222222;

    let grossTax = calculateGrossTax(income, parsedCustomBracket);

    expect(grossTax).toEqual(80199.90);
});

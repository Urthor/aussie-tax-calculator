import {taxBracket20152016, taxBracket20172018, taxBracket20202021} from "../../src/constants";
import {calculateGrossTax} from "../../src/calculation";

test("Test gross income calculation for default tax bracket 2021-2022", () => {
    let taxBracket = taxBracket20202021;
    let income = 100000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(22967.00);
});

test("Test gross income calculation for default tax bracket below low income threshold 2021-2022", () => {
    let taxBracket = taxBracket20202021;
    let income = 10000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(0);
});

test("Test gross income calculation for middle tax bracket 2021-2022", () => {
    let taxBracket = taxBracket20202021;
    let income = 50000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(6717.00);
});

test("Test gross income calculation for 2015-2016 tax bracket", () => {
    let taxBracket = taxBracket20152016;
    let income = 100000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(24947.00);
});

test("Test gross income calculation for high income 2020-2021", () => {
    let taxBracket = taxBracket20202021;
    let income = 1000000;

    let grossTax = calculateGrossTax(income, taxBracket);

    expect(grossTax).toEqual(420667.00);
});


import {parseIncome} from "../../src/utils";

test("Test parse income to parse a the income string", () => {
    let incomeString = "1000";
    let income = parseIncome(incomeString)
    expect(income).toEqual(1000);
});

test("Test float with correct dp for parse income", () => {
    let incomeString = "1000.15";
    let income = parseIncome(incomeString)
    expect(income).toEqual(1000.15);
});

test("Test float with extra dp for parse income", () => {
    let incomeString = "1000.4567890";
    let income = parseIncome(incomeString)
    expect(income).toEqual(1000.46);
});

test("Test invalid number with dollar sign for parse income.", () => {
    let incomeString = "$1000";
    expect(() => parseIncome(incomeString)).toThrow("Income must be a number.");
});

test("Test invalid number with comma for income.", () => {
    let incomeString = "$10,000";
    expect(() => parseIncome(incomeString)).toThrow("Income must be a number.");
});

test("Test empty string for argument", () => {
    let incomeString = "";
    expect(() => parseIncome(incomeString)).toThrow("Income must be a number.");
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNumberOfArgs = exports.checkBrackeErrors = exports.parseCustomTaxBracket = exports.getTaxBrackets = exports.parseIncome = exports.printTaxBrackets = void 0;
const constants_1 = require("./constants");
function printTaxBrackets(initialTaxBrackets) {
    for (const [key, value] of initialTaxBrackets) {
        const valuesStr = Array.from(value.entries())
            .map(([innerKey, innerValue]) => {
            if (innerKey === Number.MAX_SAFE_INTEGER) {
                return `Maximum: ${innerValue}`;
            }
            return `${innerKey}: ${innerValue}`;
        })
            .join(", ");
        console.log(`${key}\n${valuesStr}`);
    }
}
exports.printTaxBrackets = printTaxBrackets;
;
function parseIncome(input) {
    const income = Number(input);
    if (isNaN(income) || input.length === 0) {
        throw new Error("Income must be a number.");
    }
    return Number(income.toFixed(2));
}
exports.parseIncome = parseIncome;
function getTaxBrackets(taxYear) {
    let taxBrackets = constants_1.initialTaxBrackets.get(taxYear);
    if (taxBrackets === undefined) {
        throw new Error(`Invalid tax year format. Correct format is yyyy-yyy, you submitted ${taxYear}.`);
    }
    return taxBrackets;
}
exports.getTaxBrackets = getTaxBrackets;
function parseCustomTaxBracket(input) {
    let inputArray = input.split(",");
    let taxBrackets = new Map();
    for (let i = 0; i < inputArray.length; i++) {
        let bracket = inputArray[i].split(":");
        if (i === inputArray.length - 1) {
            bracket[0] = Number.MAX_SAFE_INTEGER.toString();
        }
        if (checkBrackeErrors(bracket) === true) {
            throw new Error("Invalid tax bracket format. Correct format is x:y, you submitted " + inputArray[i]);
        }
        let key = Number(bracket[0]);
        let value = Number(bracket[1]);
        taxBrackets.set(key, value);
    }
    return taxBrackets;
}
exports.parseCustomTaxBracket = parseCustomTaxBracket;
function checkBrackeErrors(bracket) {
    if (bracket.length != 3) {
        return false;
    }
    else if (bracket[1] != ":") {
        return false;
    }
    else if (isNaN(Number(bracket[0])) || isNaN(Number(bracket[2]))) {
        return false;
    }
    return true;
}
exports.checkBrackeErrors = checkBrackeErrors;
function checkNumberOfArgs(args) {
    if (args.length < 2) {
        throw new Error("Please provide correct arguments.");
    }
}
exports.checkNumberOfArgs = checkNumberOfArgs;

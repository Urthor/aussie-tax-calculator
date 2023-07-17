"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNumberOfArgs = exports.getTaxBrackets = exports.parseIncome = exports.printTaxBrackets = void 0;
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
function checkNumberOfArgs(args) {
    if (args.length < 2) {
        throw new Error("Please provide correct arguments.");
    }
}
exports.checkNumberOfArgs = checkNumberOfArgs;

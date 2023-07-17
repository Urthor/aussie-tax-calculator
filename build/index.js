#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const utils_1 = require("./utils");
const calculation_1 = require("./calculation");
let args = process.argv.slice(2);
if (args.length === 0 || args[0] === "--help") {
    console.log(constants_1.helpMessage);
    process.exit(0);
}
switch (args[0]) {
    case "view-tax-rates":
        (0, utils_1.printTaxBrackets)(constants_1.initialTaxBrackets);
        process.exit(0);
        break;
    case "view-input-format":
        console.log(constants_1.inputFormatMessage);
        process.exit(0);
        break;
    case "calculate-tax":
        console.log("Calculating tax rates.");
        (0, utils_1.checkNumberOfArgs)(args);
        let income = (0, utils_1.parseIncome)(args[1]);
        let tax_brackets = (0, utils_1.getTaxBrackets)(args[2]);
        let gross_tax = (0, calculation_1.calculateGrossTax)(income, tax_brackets);
        console.log(gross_tax);
        process.exit(0);
        break;
    case "calculate-custom-year":
        console.log("Calculating tax rates with a custom year.");
        // Your logic for calculating tax goes here
        process.exit(0);
        break;
    default:
        console.log(constants_1.helpMessage);
        process.exit(0);
}

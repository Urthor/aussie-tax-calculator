#!/usr/bin/env node

import {helpMessage, initialTaxBrackets, inputFormatMessage} from "./constants";
import {checkNumberOfArgs, getTaxBrackets, parseIncome, printTaxBrackets} from "./utils";
import {calculateGrossTax} from "./calculations";


let args: string[] = process.argv.slice(2);

if (args.length === 0 || args[0] === "--help") {
    console.log(helpMessage);
    process.exit(0);
}

switch (args[0]) {
    case "view-tax-rates":
        printTaxBrackets(initialTaxBrackets);
        process.exit(0);
        break
    case "view-input-format":
        console.log(inputFormatMessage);
        process.exit(0);
        break
    case "calculate-tax":
        console.log("Calculating tax rates.");
        checkNumberOfArgs(args);
        let income = parseIncome(args[1]);
        let tax_brackets = getTaxBrackets(args[2]);

        let gross_tax = calculateGrossTax(income, tax_brackets);
        console.log(gross_tax);
        process.exit(0);
        break
    case "calculate-custom-year":
        console.log("Calculating tax rates with a custom year.");
        checkNumberOfArgs(args);
        let customIncome = parseIncome(args[1]);
        let customTaxBracket = getTaxBrackets(args[2]);
        let grossTax = calculateGrossTax(customIncome, customTaxBracket);
        process.exit(0);
        break;
    default:
        console.log(helpMessage);
        process.exit(0);
}

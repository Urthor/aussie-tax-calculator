"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputFormatMessage = exports.helpMessage = exports.initialTaxBrackets = exports.taxBracket20152016 = exports.taxBracket20172018 = exports.taxBracket20192020 = exports.taxBracket20202021 = exports.taxJSONFilepath = void 0;
const path_1 = __importDefault(require("path"));
const os = __importStar(require("os"));
exports.taxJSONFilepath = path_1.default.join(os.homedir(), '.local', 'share', 'aussie-tax-calculator', 'tax_brackets.json');
exports.taxBracket20202021 = new Map([
    [18200, 0],
    [45000, 0.19],
    [120000, 0.325],
    [180000, 0.37],
    [Number.MAX_SAFE_INTEGER, 0.45],
]);
exports.taxBracket20192020 = new Map([
    [18200, 0],
    [37000, 0.19],
    [90000, 0.325],
    [180000, 0.37],
    [Number.MAX_SAFE_INTEGER, 0.45],
]);
exports.taxBracket20172018 = new Map([
    [18200, 0],
    [37000, 0.19],
    [87000, 0.325],
    [180000, 0.37],
    [Number.MAX_SAFE_INTEGER, 0.45],
]);
exports.taxBracket20152016 = new Map([
    [18200, 0],
    [37000, 0.19],
    [80000, 0.325],
    [180000, 0.37],
    [Number.MAX_SAFE_INTEGER, 0.45],
]);
exports.initialTaxBrackets = new Map([
    ["2013-2014", new Map(exports.taxBracket20152016)],
    ["2014-2015", new Map(exports.taxBracket20152016)],
    ["2015-2016", new Map(exports.taxBracket20152016)],
    ["2016-2017", new Map(exports.taxBracket20172018)],
    ["2017-2018", new Map(exports.taxBracket20172018)],
    ["2018-2019", new Map(exports.taxBracket20192020)],
    ["2019-2020", new Map(exports.taxBracket20192020)],
    ["2020-2021", new Map(exports.taxBracket20202021)],
    ["2021-2022", new Map(exports.taxBracket20202021)],
    ["2022-2023", new Map(exports.taxBracket20202021)],
    ["2023-2024", new Map(exports.taxBracket20202021)],
]);
exports.helpMessage = `
Aussie tax calculator calculates the gross tax on your taxable income for a particular financial year.

In layman"s terms, it accepts an income and the relevant tax year, and outputs the amount of tax you will pay.

Calculating using custom tax rates is also supported, allowing tax rates for foreign residents or residents from other 
countries to calculate their custom rates.

Usage: 
    aussie-tax-calculator view-tax-rates
    aussie-tax-calculator view-input-format
    aussie-tax-calculator calculate-tax <income> <tax-year>
    aussie-tax-calculator calculate-custom-year <income> <custom_tax_rate> 

Commands:
  view-tax-rates: Prints Aussie tax calculator"s default tax rates for supported tax years. 
  calculate-tax: Calculates income tax for a predefined tax year.  
    Example: 
    
      > aussie-tax-calculator 97804 2015-2016
      > 24134.48
      
  calculate-custom-year: Uses a custom tax rate to calculate your income tax.
    Example:
    
      > aussie-tax-calculator 97804 "18200: 0, 45000: 0.19, 120000: 0.325, 180000: 0.37, Maximum: 0.45"
      > 24134.48
      `;
exports.inputFormatMessage = `
Income:

Income rounds to 2 decimal places.  
e.g. 97804.151251 rounds to 97804.15

Income should avoid leading dollar signs, comma, or other characters.
Income is rounded via banker's rounding.  e.g. 0.516 rounds to 0.52, 1.5 rounds to 2.
 
Tax Year:

For aussie-tax-calculator's default supplied tax years, the format is "YYYY-YYYY" where YYYY is the year.
See view tax rates.  Year must match exactly.
 
Custom Tax Brackets:

For the custom tax rate, supply the custom tax rate in the following format.

"<tax_bracket_one>: <fraction_one>, <tax_bracket_two>: <fraction_two>... <last_tax_bracket>: <last_fraction>"

Note the custom_tax_rate must be passed via a single string in shell.

Tax brackets represent the upper boundaries of a tax bracket.  
Tax brackets rounds to 2 decimal places.  Example, 15000.151251 rounds to 15000.15 

Fractions are fractional decimals between 0 and 1.  e.g. 0.01 (1% tax rate), 0.75 (75% rate rate).
Fractions will be rounded to 2 decimal places.  e.g, 0.242 is a 24% tax rate.
A fraction greater than 1 or less than 0 will be invalid.

The final tax bracket supplied becomes the "upper boundary."  
Regardless of the key, it applies to all income above the second last tax bracket.
`;

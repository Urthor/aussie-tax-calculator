"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateGrossTax = void 0;
function calculateGrossTax(income, taxBrackets) {
    // For each tax bracket, from last to first:
    // Calculate amount to subtract: income - bracket upper bound times bracket amount.
    // Subtract from income.
    let bracketStart = 0;
    let grossTax = 0;
    for (const [key, taxRate] of taxBrackets.entries()) {
        let bracketEnd = key;
        if (key === Number.MAX_SAFE_INTEGER) {
            bracketEnd = income;
        }
        let taxable_income = bracketEnd - bracketStart;
        if (income < bracketEnd) {
            taxable_income = income - bracketStart;
            grossTax += taxable_income * taxRate;
            return grossTax;
        }
        let tax = taxable_income * taxRate;
        grossTax += tax;
        bracketStart = bracketEnd;
    }
    return grossTax;
}
exports.calculateGrossTax = calculateGrossTax;

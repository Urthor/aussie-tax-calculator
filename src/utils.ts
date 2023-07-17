import {initialTaxBrackets} from "./constants";

export function printTaxBrackets(initialTaxBrackets: Map<string, Map<number, number>>) {
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
};

export function parseIncome(input: string): number {
    const income = Number(input);
    if (isNaN(income) || input.length === 0) {
        throw new Error("Income must be a number.");
    }
    return Number(income.toFixed(2));
}

export function getTaxBrackets(taxYear: string): Map<number, number> {
    let taxBrackets = initialTaxBrackets.get(taxYear);

    if (taxBrackets === undefined) {
        throw new Error(`Invalid tax year format. Correct format is yyyy-yyy, you submitted ${taxYear}.`);
    }

    return taxBrackets;
}

export function checkNumberOfArgs(args: string[]) {
    if (args.length < 2) {
        throw new Error("Please provide correct arguments.");
    }
}

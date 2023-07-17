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

export function parseCustomTaxBracket(input: string): Map<number, number> {
    let inputArray = input.split(",");
    let taxBrackets = new Map<number, number>();

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

export function checkBrackeErrors(bracket: string[]): boolean {
    if (bracket.length != 3) {
        return false;
    } else if (bracket[1] != ":") {
        return false;
    } else if (isNaN(Number(bracket[0])) || isNaN(Number(bracket[2]))) {
        return false;
    }

    return true;
}

export function checkNumberOfArgs(args: string[]) {
    if (args.length < 2) {
        throw new Error("Please provide correct arguments.");
    }
}

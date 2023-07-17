#!/usr/bin/env node

const helpMessage = `
Usage: node your-app [command]

Commands:
  set-tax-rates: Set tax rates
  calculate-tax: Calculate tax

For more information on a specific command, use:
  node your-app [command] --help
`;

let args: string[] = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help') {
    console.log(helpMessage);
    process.exit(0);
}

// Determine which command to run
switch (args[0]) {
    case 'set-tax-rates':
        console.log('Setting tax rates...');
        // Your logic for setting tax rates goes here
        break;

    case 'calculate-tax':
        console.log('Calculating tax...');
        // Your logic for calculating tax goes here
        break;

    default:
        console.log(`Unknown command: ${args[0]}`);
        console.log(helpMessage);
}

export function sum(a: number, b: number) {
    return a + b;
}

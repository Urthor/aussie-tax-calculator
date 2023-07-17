import {existsSync, mkdirSync, writeFileSync} from 'fs';
import {resolve} from 'path';


function setupJSONFile(filepath: string, taxYears: Map<string, Map<number, number>>) {

    filepath = resolve(filepath); // resolve filepath

    if (!existsSync(`${filepath}`)) {
        // Check if directory exists
        if (!existsSync(filepath)) {
            mkdirSync(filepath, {recursive: true}); // create directory if it doesn't exist
        }
        writeJsonFile(filepath, fileName, taxYears); // write JSON file
    }
}

function getAllTaxYears(): Map<string, Map<number, number>> {
    // TODO: Read from JSON to return.
    return new Map<string, Map<number, number>>();
}

function insertTaxBracket(bracket: string, rates: Map<number, number>) {
    // TODO: Write to JSON.
}
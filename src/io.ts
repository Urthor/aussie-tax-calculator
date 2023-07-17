// import * as fs from 'fs';
// import * as path from 'path';
// import {serializeMap} from "./utils";
//
//
// export function setupJSONFile(filepath: string, taxYears: Map<string, [number, number][]>) {
//     if (fs.existsSync(filepath)) {
//         console.log("File already exists.")
//         return;
//     }
//
//     const serializable: Record<string, [number, number][]> = {};
//     for (const [key, value] of taxYears.entries()) {
//         serializable[key] = value;
//     }
//
//     const taxYearsJSON = JSON.stringify(serializable);
//
//     let directoryPath = path.dirname(filepath);
//     fs.mkdirSync(directoryPath, {recursive: true});
//     fs.writeFileSync(filepath, taxYearsJSON);
//     console.log("Written to share");
// }
//
// export function getAllTaxYears(): Map<string, Map<number, number>> {
//     // TODO: Read from JSON to return.
//     return new Map<string, Map<number, number>>();
// }
//
// export function insertTaxBracket(bracket: string, rates: Map<number, number>) {
//     // TODO: Write to JSON.
// }
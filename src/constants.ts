import {resolve} from "path";

const jsonFilepath = resolve("/var/lib/aussie-tax-calculator/tax_brackets.json");

const aussieTaxBrackets = new Map<number, number>([
    [18200, 0],
    [45000, 0.19],
    [120000, 0.325],
    [180000, 0.37],
    [Number.MAX_SAFE_INTEGER, 0.45],
]);

const initialTaxBrackets = new Map<string, Map<number, number>>([
    ["2013-2014", new Map(aussieTaxBrackets)],
    ["2014-2015", new Map(aussieTaxBrackets)],
    ["2015-2016", new Map(aussieTaxBrackets)],
    ["2016-2017", new Map(aussieTaxBrackets)],
    ["2017-2018", new Map(aussieTaxBrackets)],
    ["2018-2019", new Map(aussieTaxBrackets)],
    ["2019-2020", new Map(aussieTaxBrackets)],
    ["2020-2021", new Map(aussieTaxBrackets)],
    ["2021-2022", new Map(aussieTaxBrackets)],
    ["2022-2023", new Map(aussieTaxBrackets)],
    ["2023-2024", new Map(aussieTaxBrackets)],
]);


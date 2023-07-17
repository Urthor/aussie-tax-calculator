import {getTaxBrackets} from "../../src/utils";
import {taxBracket20152016, taxBracket20192020, taxBracket20202021} from "../../src/constants";

test("Test retrieval of tax year 2020-2021", () => {
    let taxYear = "2020-2021";

    let taxBrackets = getTaxBrackets(taxYear);

    expect(taxBrackets).toEqual(taxBracket20202021);
});

test("Test retrieval of tax year 2013-2014", () => {
    let taxYear = "2013-2014";

    let taxBrackets = getTaxBrackets(taxYear);

    expect(taxBrackets).toEqual(taxBracket20152016);
});
test("Test retrieval of tax year 2019-2020", () => {
    let taxYear = "2019-2020";

    let taxBrackets = getTaxBrackets(taxYear);

    expect(taxBrackets).toEqual(taxBracket20192020);
});
test("Test incorrect retrieval of an out of bounds tax year", () => {
    let taxYear = "1001-1002";

    expect(() => getTaxBrackets(taxYear)).toThrow("Invalid tax year format. Correct format is yyyy-yyy, you submitted 1001-1002.");
});

// test("Test retrieval of tax year 2019-2020", () => {
//     let taxYear = "2019-2020";
//
//     let taxBrackets = getTaxBrackets(taxYear);
//
//     expect(taxBrackets).toEqual(aussieTaxBrackets);
// });
// test("Test retrieval of tax year 2019-2020", () => {
//     let taxYear = "2019-2020";
//
//     let taxBrackets = getTaxBrackets(taxYear);
//
//     expect(taxBrackets).toEqual(aussieTaxBrackets);
// });

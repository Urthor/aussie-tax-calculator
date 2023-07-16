"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_ts_1 = require("../src/index.ts");
test("Test sum returns sum of 4 and 5", () => {
    expect((0, index_ts_1.sum)(4, 5)).toBe(9);
});

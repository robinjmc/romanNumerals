const romanToArabic = require('./romanNumerals');

describe("Instances of the I rune", () => {
    test("that a single I returns 1", () => {
        expect(romanToArabic("I")).toBe(1);
    });
});


describe("Instances of the V rune", () => {
    test("that a single V returns 5", () => {
        expect(romanToArabic("V")).toBe(5);
    });
});
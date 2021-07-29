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


describe("Instances of the X rune", () => {
    test("that a single X returns 10", () => {
        expect(romanToArabic("X")).toBe(10);
    });
});


describe("Instances of the L rune", () => {
    test("that a single L returns 50", () => {
        expect(romanToArabic("L")).toBe(50);
    });
});


describe("Instances of the C rune", () => {
    test("that a single C returns 100", () => {
        expect(romanToArabic("C")).toBe(100);
    });
});


describe("Instances of the D rune", () => {
    test("that a single D returns 500", () => {
        expect(romanToArabic("D")).toBe(500);
    });
});


describe("Instances of the M rune", () => {
    test("that a single M returns 1000", () => {
        expect(romanToArabic("M")).toBe(1000);
    });
});
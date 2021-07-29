const romanToArabic = require('./romanNumerals');

describe("Instances of the I rune", () => {
    test("that a single I returns 1", () => {
        expect(romanToArabic("I")).toBe(1);
    });
    test("that two Is returns 2", () => {
        expect(romanToArabic("II")).toBe(2);
    });
    test("that three Is returns 3", () => {
        expect(romanToArabic("III")).toBe(3);
    });
});


describe("Instances of the V rune", () => {
    test("that a single V returns 5", () => {
        expect(romanToArabic("V")).toBe(5);
    });
    test("that I after V adds 1 to 5 to return 6", () => {
        expect(romanToArabic("VI")).toBe(6);
    });
});


describe("Instances of the X rune", () => {
    test("that a single X returns 10", () => {
        expect(romanToArabic("X")).toBe(10);
    });
    test("that two Xs return 20", () => {
        expect(romanToArabic("XX")).toBe(20);
    });
    test("that three Xs return 30", () => {
        expect(romanToArabic("XXX")).toBe(30);
    });
});


describe("Instances of the L rune", () => {
    test("that a single L returns 50", () => {
        expect(romanToArabic("L")).toBe(50);
    });
    test("that an L followed by an I returns 51", () => {
        expect(romanToArabic("LI")).toBe(51);
    });
    test("that an L followed by a V and then an I returns 56", () => {
        expect(romanToArabic("LVI")).toBe(56);
    });
});


describe("Instances of the C rune", () => {
    test("that a single C returns 100", () => {
        expect(romanToArabic("C")).toBe(100);
    });
    test("that two Cs returns 200", () => {
        expect(romanToArabic("CC")).toBe(200);
    });
    test("that three Cs returns 300", () => {
        expect(romanToArabic("CCC")).toBe(300);
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
    test("that two Ms return 2000", () => {
        expect(romanToArabic("MM")).toBe(2000);
    });
    test("that three Ms return 3000", () => {
        expect(romanToArabic("MMM")).toBe(3000);
    });
});
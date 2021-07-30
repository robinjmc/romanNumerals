const arabicToRoman = require('./arabicToRomanConverter');

describe("Instances of the I rune", () => {
    test("that 1 returns I", () => {
        expect(arabicToRoman(1)).toBe("I");
    });
    test("that 2 returns II", () => {
        expect(arabicToRoman(2)).toBe("II");
    });
    test("that 3 returns III", () => {
        expect(arabicToRoman(3)).toBe("III");
    });
});



describe("Instances of the V rune", () => {
    test("that 5 returns V", () => {
        expect(arabicToRoman(5)).toBe("V");
    });
    test("that 6 returns I after V", () => {
        expect(arabicToRoman(6)).toBe("VI");
    });
    test("that 4 returns V after I", () => {
        expect(arabicToRoman(4)).toBe("IV");
    });
});

describe("Instances of the X rune", () => {
    test("that 10 returns X", () => {
        expect(arabicToRoman(10)).toBe("X");
    });
    test("that 20 returns XX", () => {
        expect(arabicToRoman(20)).toBe("XX");
    });
    test("that 30 returns XXX", () => {
        expect(arabicToRoman(30)).toBe("XXX");
    });
    test("that 9 returns X after I", () => {
        expect(arabicToRoman(9)).toBe("IX");
    });
});

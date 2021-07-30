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

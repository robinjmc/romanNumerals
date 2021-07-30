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

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

describe("Instances of the L rune", () => {
    test("that 50 returns L", () => {
        expect(arabicToRoman(50)).toBe("L");
    });
    test("that 51 returns an L followed by an I", () => {
        expect(arabicToRoman(51)).toBe("LI");
    });
    test("that 56 returns an L followed by a V and then an I", () => {
        expect(arabicToRoman(56)).toBe("LVI");
    });
    test("that 40 returns L after X", () => {
        expect(arabicToRoman(40)).toBe("XL");
    });
    test("that 43 returns XLIII", () => {
        expect(arabicToRoman(43)).toBe("XLIII");
    })
    test("that 44 returns IV after XL", () => {
        expect(arabicToRoman(44)).toBe("XLIV");
    });
});


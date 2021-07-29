const romanNumeralsData = {
    "I": 1,
    "V": 5,
    "X": 10,
}


const romanToArabic = (roman) => {
    return romanNumeralsData[roman];
}

module.exports = romanToArabic;
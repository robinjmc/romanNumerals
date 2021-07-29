const romanNumeralsData = {
    "I": 1,
    "V": 5,
}


const romanToArabic = (roman) => {
    return romanNumeralsData[roman];
}

module.exports = romanToArabic;
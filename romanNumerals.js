const romanNumeralsData = {
    "I": 1,
    "V": 5,
}


const romanToArabic = (roman) => {
    if (roman === "I") {
        return 1;
    }
    if (roman === "V") {
        return 5;
    }
}

module.exports = romanToArabic;
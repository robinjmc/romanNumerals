const romanNumeralsJson = require('./romanNumeralsData.json');

const romanToArabic = (roman) => {
    return romanNumeralsJson[roman];
}

module.exports = romanToArabic;

const romanNumeralsJson = require('./romanNumeralsData.json');

const romanToArabic = (roman) => {
    let romanArr = roman.split('');
    let arabic = 0;
    for (i = 0; i < romanArr.length; i++) {
        arabic += romanNumeralsJson[romanArr[i]];
    }
    return arabic;
}

module.exports = romanToArabic;

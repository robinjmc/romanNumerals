const romanNumeralsJson = require('../romanNumeralsData.json');

const romanToArabic = (roman) => {
    let romanArr = roman.split('');
    let arabic = 0;
    for (i = 0; i < romanArr.length; i++) {
        if (romanNumeralsJson[romanArr[i]] < romanNumeralsJson[romanArr[i + 1]]) {
            arabic -= romanNumeralsJson[romanArr[i]]
        } else {
            arabic += romanNumeralsJson[romanArr[i]];
        }
    }
    return arabic;
}

module.exports = romanToArabic;

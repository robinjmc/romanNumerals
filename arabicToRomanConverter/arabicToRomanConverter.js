const romanNumeralsJson = require('../romanNumeralsData.json');

const arabicToRoman = (arabic) => {
    let roman = "";
    while (arabic > 0) {
        roman += "I";
        arabic--;
    }

    return roman;

}

module.exports = arabicToRoman;
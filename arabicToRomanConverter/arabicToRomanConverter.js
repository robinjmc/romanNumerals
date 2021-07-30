const romanNumeralsJson = require('../romanNumeralsData.json');

const arabicToRoman = (arabic) => {
    let roman = "";

    while (arabic > 0) {
        if (arabic - 10 >= 0) {
            roman += "X";
            arabic -= 10;
        } else if (arabic - 9 >= 0) {
            roman += "IX";
            arabic -= 9;
        } else if (arabic - 5 >= 0) {
            roman += "V";
            arabic -= 5;
        } else if (arabic - 4 >= 0) {
            roman += "IV";
            arabic -= 4;
        }
        else {
            roman += "I";
            arabic--;
        }
    }

    return roman;

}

module.exports = arabicToRoman;
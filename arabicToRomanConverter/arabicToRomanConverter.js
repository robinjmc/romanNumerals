const romanNumeralsJson = require('../romanNumeralsData.json');

const arabicToRoman = (arabic) => {
    let roman = "";
    const romanArr = Object.entries(romanNumeralsJson).sort(function (b, a) { return a[1] - b[1] });
    while (arabic > 0) {
        for (i = 0; i < romanArr.length; i++) {
            let rRune = romanArr[i][0];
            let rAmount = romanArr[i][1];
            let isSingular = i % 2 !== 0;
            if (isSingular) {
                let nextRRune = romanArr[i + 1][0];
                let nextRAmount = romanArr[i + 1][1];
                let prevRRune = romanArr[i - 1][0];
                let prevRAmount = romanArr[i - 1][1];
                if (arabic - (prevRAmount - nextRAmount) >= 0) {
                    roman += (nextRRune + prevRRune);
                    arabic -= (prevRAmount - nextRAmount);
                } else if (arabic - rAmount >= 0) {
                    roman += rRune;
                    arabic -= rAmount;
                } else if (arabic - (rAmount - nextRAmount) >= 0) {
                    roman += (nextRRune + rRune);
                    arabic -= (rAmount - nextRAmount);
                }
            } else if (arabic - rAmount >= 0) {
                while (arabic > 0) {
                    roman += rRune;
                    arabic -= rAmount;
                }
            }
        }
    }

    // while (arabic > 0) {
    //     if (arabic - 10 >= 0) {
    //         roman += "X";
    //         arabic -= 10;
    //     } else if (arabic - 9 >= 0) {
    //         roman += "IX";
    //         arabic -= 9;
    //     } else if (arabic - 5 >= 0) {
    //         roman += "V";
    //         arabic -= 5;
    //     } else if (arabic - 4 >= 0) {
    //         roman += "IV";
    //         arabic -= 4;
    //     }
    //     else {
    //         roman += "I";
    //         arabic--;
    //     }
    // }

    return roman;

}

module.exports = arabicToRoman;
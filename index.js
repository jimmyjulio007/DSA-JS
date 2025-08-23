
/**
 * 
 * ADAM NUMBER
 * 
 */

// function isNumberAdam(number) {
//     const n = number.toString()
//     const nReverse = n.split("").reverse().join("")

//     const sqaure = number * number
//     const sqaureReverse = parseInt(nReverse * nReverse)

//     const validSquareReverse = parseInt(sqaureReverse.toString().split("").reverse().join(""))

//     if (validSquareReverse === sqaure) {
//         return console.log("OUI")
//     }
//     else {
//         return console.log("NON")
//     }
// }

// isNumberAdam(12)


// // Fonction pour inverser un nombre mathématiquement
// function reverseNumber(n) {
//     let rev = 0;
//     while (n > 0) {
//         rev = rev * 10 + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     return rev;
// }

// // Fonction pour vérifier si un nombre est un Adam Number
// function isAdamNumber(number) {
//     if (number < 0) return false;
//     const square = number * number;

//     const reversedNumber = reverseNumber(number);
//     const reversedSquare = reversedNumber * reversedNumber;

//     const reversedBack = reverseNumber(reversedSquare);

//     return square === reversedBack;
// }

// const numbers = [12, 13, 21, 0, 101];

// numbers.forEach(num => {
//     console.log(`${num}: ${isAdamNumber(num) ? "OUI" : "NON"}`);
// });



/**
 * 
 * 
 * LINKED LIST
 * 
 */


/**
 * 
 * Integer into Roman
 * 
 * 
 */


// function isRomanNumber(n) {
//     if (n < 1 || n > 3999) return console.log("Erreur")
//     const result = []

//     const tableauValeur = [
//         [1000, "M"],
//         [900, "CM"],
//         [500, "D"],
//         [400, "CD"],
//         [100, "C"],
//         [90, "XC"],
//         [50, "L"],
//         [40, "XL"],
//         [10, "X"],
//         [9, "IX"],
//         [5, "V"],
//         [4, "IV"],
//         [1, "I"]
//     ]

//     for (const [valeur, symbole] of tableauValeur) {
//         while (n >= valeur) {
//             result.push(symbole)
//             n -= valeur
//         }
//     }
//     return result.join("")
// }

// console.log(isRomanNumber(45))


/**
 * 
 * ROMAN TO INTEGER
 */

// function convertNumberIntoRoman(roman) {
//     const tableauValeur = [
//         [1000, "M"],
//         [900, "CM"],
//         [500, "D"],
//         [400, "CD"],
//         [100, "C"],
//         [90, "XC"],
//         [50, "L"],
//         [40, "XL"],
//         [10, "X"],
//         [9, "IX"],
//         [5, "V"],
//         [4, "IV"],
//         [1, "I"]
//     ]

//     let total = 0
//     let index = 0

//     while (index < roman.length) {
//         for (const [number, symbole] of tableauValeur) {
//             if (roman.substring(index, symbole.length) === symbole) {
//                 total += number
//                 index += symbole.length
//             }
//         }
//     }
//     return total
// }


/**
 * 
 * Palindrom
 * @param {*} str 
 * @returns 
 */
// function reverseString(str) {
//     let reverse = "";

//     for (let index = str.length - 1; index >= 0; index--) {
//         reverse += str[index];
//     }
//     return reverse;
// }


// function isPalindrome(s){
//     const value = reverseString(s)
//     if(s === value){
//         return console.log("YES")
//     }else{
//         console.log("NO")
//     }
// }

// isPalindrome('EKITIKE')



function isAmstrongNumber(number){
    const digits = number.toString().split('')
    const n = parseInt(digits.length)
    let total = 0
    for (const digit of digits) {
        total += Math.pow(digit, n)
    }
    if(total === number){
        console.log('YES')
    }else{
        console.log('NO')
    }

}

isAmstrongNumber(371)
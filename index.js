
/**
 * 
 * ADAM NUMBER
 * 
 */

function isNumberAdam(number) {
    const n = number.toString()
    const nReverse = n.split("").reverse().join("")

    const sqaure = number * number
    const sqaureReverse = parseInt(nReverse * nReverse)

    const validSquareReverse = parseInt(sqaureReverse.toString().split("").reverse().join(""))

    if (validSquareReverse === sqaure) {
        return console.log("OUI")
    }
    else {
        return console.log("NON")
    }
}

// isNumberAdam(12)


// // Fonction pour inverser un nombre mathématiquement
function reverseNumber(n) {
    let rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return rev;
}

// // Fonction pour vérifier si un nombre est un Adam Number
function isAdamNumber(number) {
    if (number < 0) return false;
    const square = number * number;

    const reversedNumber = reverseNumber(number);
    const reversedSquare = reversedNumber * reversedNumber;

    const reversedBack = reverseNumber(reversedSquare);

    return square === reversedBack;
}

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


function isRomanNumber(n) {
    if (n < 1 || n > 3999) return console.log("Erreur")
    const result = []

    const tableauValeur = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ]

    for (const [valeur, symbole] of tableauValeur) {
        while (n >= valeur) {
            result.push(symbole)
            n -= valeur
        }
    }
    return result.join("")
}

// console.log(isRomanNumber(45))


/**
 * 
 * ROMAN TO INTEGER
 */

function convertNumberIntoRoman(roman) {
    const tableauValeur = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ]

    let total = 0
    let index = 0

    while (index < roman.length) {
        for (const [number, symbole] of tableauValeur) {
            if (roman.substring(index, symbole.length) === symbole) {
                total += number
                index += symbole.length
            }
        }
    }
    return total
}


/**
 * 
 * Palindrom
 * @param {*} str 
 * @returns 
 */

function reverseString(str) {
    let reverse = "";

    for (let index = str.length - 1; index >= 0; index--) {
        reverse += str[index];
    }
    return reverse;
}


function isPalindrome(s) {
    const value = reverseString(s)
    if (s === value) {
        return console.log("YES")
    } else {
        console.log("NO")
    }
}

// isPalindrome('EKITIKE')

/**
 * Amstrong  Number
 */

function isAmstrongNumber(number) {
    const digits = number.toString().split('')
    const n = parseInt(digits.length)
    let total = 0
    for (const digit of digits) {
        total += Math.pow(digit, n)
    }
    if (total === number) {
        console.log('YES')
    } else {
        console.log('NO')
    }

}

// isAmstrongNumber(371)


/**
 * Long sequence of Binary
 */

const input = [1, 0, 1, 1, 1, 1, 0, 1]


const longSequence = (Arr) => {
    const sequence = []
    let temp = []

    for (let index = 0; index < Arr.length; index++) {
        if (Arr[index] === 1) {
            temp.push(1)
        } else {
            if (temp.length > 0) {
                sequence.push(temp)
                temp = []
            }
        }

    }
    if (temp.length) sequence.push(temp)
    const seqNumber = sequence.reduce((a, b) => (b.length > a.length ? b : a), []).length
    return seqNumber
}

//console.log(longSequence(input))


const evenNumberOfDigits = (Arr) => {
    let count = 0
    for (let i = 0; i < Arr.length; i++) {
        const element = Arr[i]
        const digits = element.toString().length
        if (digits % 2 === 0) {
            count++
        }
    }
    return count
}


const tab = [12, 345, 2, 6, 7896]

// console.log(evenNumberOfDigits(tab))



const rotateArrayByOne = (Array) => {
    const last = Array[Array.length - 1]
    const rest = Array.slice(0, Array.length - 1)
    return [last, ...rest]
}

// console.log(rotateArrayByOne(tab))



const moveNegativeNumber = (numbers) => {
    const Positive = []
    const Negative = []
    for (const number of numbers) {
        (number < 0) ? Negative.push(number) : Positive.push(number)
    }
    return [...Positive, ...Negative]
}

// console.log(moveNegativeNumber([1, -1, 2, 5, -8, -6]))


/**
 * le mot iterable désigne un objet qui peut être parcouru élément par élément avec une boucle
 * 
 * 
 * 
 * 
 * 
 * const arr = [1, 2, 3];
 * const iterable = arr[Symbol.iterator]()
 * console.log(iterable.next())
 * console.log(iterable.next())
 * console.log(iterable.next())
 */

// Returns a new array from a set of elements.
// console.log(Array.of(1, 5, 8))

// Creates an array from an iterable object.
// console.log(Array.from([1, 2, 3]))

const array = [5, 12, 8, 130, 44];

let index = 2;

/**
 * (method) Array<number>.at(index: number): number | undefined
 * Returns the item located at the specified index.
 */

// console.log(`An index of ${index} returns ${array.at(index)}`);



const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

// console.log(array1.splice(0, 2))

const arrayNum = array1.concat(array2) // return String[]
const Array = [...array1, array2]
array1.push(...array2) // return number

// console.log(array1)



const removeElement = (tab, target) => {

    let i = 0
    while (i < tab.length) {
        (tab[i] === target) ? tab.splice(i, 1) : ++i
    }
    return tab.length
}

// console.log(removeElement([3, 2, 2, 3], 3))


const searchInsert = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
}

const searchInsertWithBinarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

// console.log(searchInsert([1, 2, 5, 8], 9))


// const hello = 123


// const nums = hello.toString().split('')

// console.log(nums)
// const object = [1, 5, 6, 5]

// for (const element of object) {
//     console.log(element)
// }

const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[0] + 1 !== 10) {
            digits[0] += 1;
            return digits;
        }
        digits[0] = 0;
        if (i === 0) {
            digits.unshift(1);
            console.log("valeur : ", digits)
            return digits;
        }
    }
}

// console.log(plusOne([9]));


// Alternante Positive  and Negative array
const alternatePositiveNegative = (arr) => {
    let positive = [];
    let negative = [];
    for (const num of arr) {
        (num >= 0) ? positive.push(num) : negative.push(num);
    }

    let result = [];
    let i = 0, j = 0;
    while (i < positive.length || j < negative.length) {
        (i < positive.length) && result.push(positive[i++]);
        (j < negative.length) && result.push(negative[j++]);
    }
    return result
}


// console.log(
//     alternatePositiveNegative([9, -1, 5, 0, -6, 8])) //output [ 9, -1, 5, -6, 0, 8 ]


function removeDuplicates(arr) {
    const n = arr.length;
    if (n <= 1)
        return n;
    let idx = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[idx++] = arr[i];
        }
    }

    return idx;
}

// Driver code
const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDuplicates(arr);

// console.log(arr.slice(0, newSize).join(' '));

// console.log(newSize)


function removeDuplicatesWithBubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    let idx = 0;
    for (let i = 0; i < n; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            arr[idx++] = arr[i];
        }
    }
    arr.length = idx;
    return arr;
}

let arrT = [5, 2, 3, 2, 1, 5, 4];
console.log(removeDuplicatesWithBubbleSort(arrT));





/***
 * 
 * 
 * 
 * ALL SORT ALGO SOLVER  
 * 
 * 
 */


/**
 * BUBBLE SORT
 */
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

/**
 * 
 * SELECTION SORT
 * 
 */

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}



/**
 * 
 * INSERTION SORT
 * 
 */


function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}


/**
 * 
 * 
 * MERGE SORT 
 * 
 * 
 */

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}


/**
 * 
 * QUICK SORT
 * 
 */

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}


/**
 * 
 * HEAP SORT 
 * 
 */

function heapSort(arr) {
    const n = arr.length;

    function heapify(arr, n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}


/**
 * 
 * COUNTING SORT
 * 
 */

function countingSort(arr) {
    const max = Math.max(...arr);
    const count = Array(max + 1).fill(0);

    for (let num of arr) count[num]++;
    const result = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            result.push(i);
            count[i]--;
        }
    }
    return result;
}


/**
 * 
 * RADIX SORT 
 * 
 */

function radixSort(arr) {
    const maxNum = Math.max(...arr);
    let exp = 1;
    while (Math.floor(maxNum / exp) > 0) {
        const output = Array(arr.length).fill(0);
        const count = Array(10).fill(0);

        for (let i = 0; i < arr.length; i++) count[Math.floor(arr[i] / exp) % 10]++;
        for (let i = 1; i < 10; i++) count[i] += count[i - 1];
        for (let i = arr.length - 1; i >= 0; i--) {
            const digit = Math.floor(arr[i] / exp) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        for (let i = 0; i < arr.length; i++) arr[i] = output[i];
        exp *= 10;
    }
    return arr;
}


/**
 * 
 * BUCKET SORT
 */

function bucketSort(arr) {
    const n = arr.length;
    const buckets = Array.from({ length: n }, () => []);

    for (let num of arr) {
        const idx = Math.floor(num * n);
        buckets[idx].push(num);
    }

    const result = [];
    for (let bucket of buckets) {
        bucket.sort((a, b) => a - b); // ici on peut utiliser insertion sort aussi
        result.push(...bucket);
    }
    return result;
}

"use strict";

// 71. Binary Agents - freecodecamp
/* Return an English translated sentence of the passed binary string.

The binary string will be space separated.

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp! */

function binaryAgent(str) {
    return str
        .split(" ")
        .map((bin) => parseInt(bin, 2))
        .map((charcode) => String.fromCharCode(charcode))
        .join("");
}

console.log(
    binaryAgent(
        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )
);

// 72. Everything Be True - freecodecamp
/* 
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

++++++++++++
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false.

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true.

truthCheck([{"single": "yes"}], "single") should return true.

truthCheck([{"single": ""}, {"single": "double"}], "single") should return false.

truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false.

truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false. */

function truthCheck(collection, pre) {
    return collection.every((obj) => obj[pre]);
}

console.log(
    truthCheck(
        [
            { user: "Tinky-Winky", sex: "male" },
            { user: "Dipsy", sex: "male" },
            { user: "Laa-Laa", sex: "female" },
            { user: "Po", sex: "female" },
        ],
        "sex"
    )
);

// 73. Arguments Optional - freecodecamp
/* 
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */
/* 
addTogether(2, 3) should return 5.

addTogether(23, 30) should return 53.

addTogether(5)(7) should return 12.

addTogether("http://bit.ly/IqT6zt") should return undefined.

addTogether(2, "3") should return undefined.

addTogether(2)([3]) should return undefined. */

function addTogether() {
    console.log(arguments);
    // check for types other than "number"
    if ([...arguments].some((el) => !(typeof el === "number")))
        return undefined;
    // return sum of args if length is 2
    if (arguments.length === 2) return arguments[0] + arguments[1];
    // return func if length is 1
    const num = arguments[0];
    return function (x) {
        if (typeof x === "number") return num + x;
        return undefined;
    };
}

console.log(addTogether(2)(3));

// 74. Make a Person - freecodecamp

/* Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object. */
// +++++++++++++++
/* Object.keys(bob).length should return 6.

bob instanceof Person should return true.

bob.firstName should return undefined.

bob.lastName should return undefined.

bob.getFirstName() should return the string Bob.

bob.getLastName() should return the string Ross.

bob.getFullName() should return the string Bob Ross.

bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").

bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").

bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").

bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").

bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry"). */

const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let [first, last] = firstAndLast.split(" ");
    // console.log(first, "and", last);
    this.getFullName = function () {
        return first + " " + last;
    };
    this.getFirstName = function () {
        return first;
    };
    this.getLastName = function () {
        return last;
    };
    this.setLastName = function (name) {
        last = name;
    };
    this.setFirstName = function (name) {
        first = name;
    };
    this.setFullName = function (name) {
        [first, last] = name.split(" ");
    };
    return firstAndLast;
};

const bob = new Person("Bob Ross");

console.log(bob.getFullName());
console.log(bob.getFirstName());
bob.setLastName("mike");
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFullName("alice spencer");
console.log(bob.getFullName());
console.log(Object.keys(bob));

// ### 75. Palindrome Checker - freecodecamp
/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. */

function palindrome(strInput) {
    const str = strInput.replace(/[_\W]/gi, "").toLowerCase();
    const reverseStr = str.split("").reverse().join("");
    // console.log(str, reverseStr);
    return str === reverseStr;
}

// A faster way for very looong strings. This solution speed is n/2 complexity
function palindrome2(str) {
    // Assign front and back indexes
    let front = 0;
    let back = str.length - 1;
    str = str.toLowerCase();

    // check the matching chars at front and back while excluding unwanted chars.
    while (back > front) {
        if (str[front].match(/[_\W]/)) {
            front++;
            continue;
        }
        if (str[back].match(/[_\W]/)) {
            back--;
            continue;
        }
        if (str[front] !== str[back]) return false;
        front++;
        back--;
    }
    return true;
}

console.log(palindrome2("My age is 0, 0 si ega ym.")); //true
console.log(palindrome2("__My age is-0, 0 s  i- ega ym.")); //true
console.log(palindrome2("eye")); //true

// ####  76. Telephone Number Validator  - freecodecamp
/* 
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false. */

/* telephoneCheck("555-555-5555") should return a boolean.

telephoneCheck("1 555-555-5555") should return true.

telephoneCheck("1 (555) 555-5555") should return true.

+ telephoneCheck("5555555555") should return true. 

telephoneCheck("555-555-5555") should return true.

telephoneCheck("(555)555-5555") should return true.

telephoneCheck("1(555)555-5555") should return true.

telephoneCheck("555-5555") should return false.

telephoneCheck("5555555") should return false.

telephoneCheck("1 555)555-5555") should return false.

telephoneCheck("1 555 555 5555") should return true.

telephoneCheck("1 456 789 4444") should return true.

telephoneCheck("123**&!!asdf#") should return false.

telephoneCheck("55555555") should return false.

telephoneCheck("(6054756961)") should return false.

telephoneCheck("2 (757) 622-7382") should return false.

telephoneCheck("0 (757) 622-7382") should return false.

telephoneCheck("-1 (757) 622-7382") should return false.

telephoneCheck("2 757 622-7382") should return false.

telephoneCheck("10 (757) 622-7382") should return false.

telephoneCheck("27576227382") should return false.

telephoneCheck("(275)76227382") should return false.

telephoneCheck("2(757)6227382") should return false.

telephoneCheck("2(757)622-7382") should return false.

telephoneCheck("555)-555-5555") should return false.

telephoneCheck("(555-555-5555") should return false.

telephoneCheck("(555)5(55?)-5555") should return false.

telephoneCheck("55 55-55-555-5") should return false. */

function telephoneCheck(str) {
    if (/^1?([\s-])?\d{3}([\s-])?\d{3}([\s-])?\d{4}$/.test(str)) return true;

    if (/^1?([\s-])?\(\d{3}\)([\s-])?\d{3}([\s-])?\d{4}$/.test(str))
        return true;

    return false;
}

// Combining the two Regex
function telephoneCheck2(str) {
    return /^1?([\s-])?(\d{3}|\(\d{3}\))([\s-])?\d{3}([\s-])?\d{4}$/.test(str);
}
console.log(telephoneCheck2("1-5555555555"));

console.log(telephoneCheck2("555-555-5555"));
console.log(telephoneCheck2("(555)555-5555"));

// ### 77. Roman Numeral Converter - freecodecamp
/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */
// ++++
/* convertToRoman(2) should return the string II.

convertToRoman(3) should return the string III.

convertToRoman(4) should return the string IV.

convertToRoman(5) should return the string V.

convertToRoman(9) should return the string IX.

convertToRoman(12) should return the string XII.

convertToRoman(16) should return the string XVI.

convertToRoman(29) should return the string XXIX.

convertToRoman(44) should return the string XLIV.

convertToRoman(45) should return the string XLV.

convertToRoman(68) should return the string LXVIII

convertToRoman(83) should return the string LXXXIII

convertToRoman(97) should return the string XCVII

convertToRoman(99) should return the string XCIX

convertToRoman(400) should return the string CD

convertToRoman(500) should return the string D

convertToRoman(501) should return the string DI

convertToRoman(649) should return the string DCXLIX

convertToRoman(798) should return the string DCCXCVIII

convertToRoman(891) should return the string DCCCXCI

convertToRoman(1000) should return the string M

convertToRoman(1004) should return the string MIV

convertToRoman(1006) should return the string MVI

convertToRoman(1023) should return the string MXXIII

convertToRoman(2014) should return the string MMXIV

convertToRoman(3999) should return the string MMMCMXCIX */

function convertToRoman(num) {
    // Error handling
    if (typeof num !== "number" || !Number.isInteger(num)) return undefined;

    // reverse num for reading digits by index
    let digits = num.toString().split("").reverse().join("");

    let roman = "";

    // converting first digit
    switch (digits[0]) {
        case "9":
            roman = "IX";
            break;
        case "1":
            roman = "I";
            break;
        case "2":
            roman = "II";
            break;
        case "3":
            roman = "III";
            break;
        case "4":
            roman = "IV";
            break;
        case "5":
            roman = "V";
            break;
        case "6":
            roman = "VI";
            break;
        case "7":
            roman = "VII";
            break;
        case "8":
            roman = "VIII";
            break;
    }

    // converting second digit if exists
    if (digits.length >= 2) {
        switch (digits[1]) {
            case "9":
                roman = "XC" + roman;
                break;
            case "1":
                roman = "X" + roman;
                break;
            case "2":
                roman = "XX" + roman;
                break;
            case "3":
                roman = "XXX" + roman;
                break;
            case "4":
                roman = "XL" + roman;
                break;
            case "5":
                roman = "L" + roman;
                break;
            case "6":
                roman = "LX" + roman;
                break;
            case "7":
                roman = "LXX" + roman;
                break;
            case "8":
                roman = "LXXX" + roman;
                break;
        }
    }
    // converting third digit if exists
    if (digits.length >= 3) {
        switch (digits[2]) {
            case "9":
                roman = "CM" + roman;
                break;
            case "1":
                roman = "C" + roman;
                break;
            case "2":
                roman = "CC" + roman;
                break;
            case "3":
                roman = "CCC" + roman;
                break;
            case "4":
                roman = "CD" + roman;
                break;
            case "5":
                roman = "D" + roman;
                break;
            case "6":
                roman = "DC" + roman;
                break;
            case "7":
                roman = "DCC" + roman;
                break;
            case "8":
                roman = "DCCC" + roman;
                break;
        }
    }
    // converting fourth digit if exists
    if (digits.length >= 4) {
        roman = "".padStart(+digits[3], "M") + roman;
    }
    return roman;
}

console.log(convertToRoman(3721));

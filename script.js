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

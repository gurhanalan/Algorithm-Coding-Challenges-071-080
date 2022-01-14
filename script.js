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

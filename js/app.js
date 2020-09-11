/*
Problem 1. printGreeting
Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

console.log(printGreeting("Slimer"));
=> Hello there, Slimer!
*/

function printGreeting(name) {
    return ('Hello there, ' + name + '!');
}

console.log(printGreeting("Slimer"));

/*
Problem 2. reverseWordOrder
Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

console.log(reverseWordOrder("Ishmael me Call"));
=> "Call me Ishmael"

console.log(reverseWordOrder("I use Lâncome on my comb"));
=> "comb my on Lâncome use I"
*/

function reverseWordOrder(s) {
    const r = s.split(" ").reverse().join(" ");
    return r;
}

console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

/*
Problem 3. calculate
Write a function called calculate.

This function should take three arguments: two numbers and a string.

Name the parameters num1, num2, and operation.

If if the function is called with the third argument as "add", it should return the sum of num1 and num2.

If if the function is called with the third argument as "sub", it should return return num1 minus num2.

Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

console.log(calculate(4, 3, "sub"));

=> 1
console.log(calculate(4, 3, "exp"));

=> 64
*/

function calculate(num1, num2, operation) {
    if (operation === "add") {
        return (num1 + num2);
    } else if (operation === 'sub') {
        return (num1 - num2);
    } else if (operation === 'mult') {
        return (num1 * num2);
    } else if (operation === 'div') {
        return (num1 / num2);
    } else if (operation === 'exp') {
        return (Math.pow(num1, num2))
    }
}

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));

/*
Problem 4. pandigital numbers
Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with "weird" questions and you'll need to be very careful when reading these types of questions to make sure you understand what you're being asked to do.

A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.

The number 333 is not 1-to-n pandigital.

The number 0 is not 1-to-n pandigital.

The number 987654321 is 1-to-n pandigital.

Write a function that checks if a number is 1-to-n pandigital.
*/

function isPandigital (num) {
    const array1 = num.toString().split('');
    const array2 = [];

    if (array1.includes('0')) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) === false) {
            array2[i] = array1[i]
            if (array1.length === array2.length) {
                return true;
            }
        } else {
            return false;
        }
    }
    return array2;
}
console.log(isPandigital(15234));
console.log(isPandigital(333));
console.log(isPandigital(0));
console.log(isPandigital(987654321));
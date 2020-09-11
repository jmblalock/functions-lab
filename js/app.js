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
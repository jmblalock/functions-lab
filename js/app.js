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
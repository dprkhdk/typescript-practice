"use strict";
console.log('-------------------- Functions --------------------');
function sum(numberOne, numberTwo) {
    // The function takes two parameters, both of type number, and returns their sum.
    return numberOne + numberTwo;
}
const result = sum(5, 10);
console.log(result);
const multiply = (a, b) => {
    return a * b;
};
const product = multiply(4, 5);
console.log(product);
function sayHello(name = "World") {
    return `Hello, ${name}!`;
}
console.log(sayHello());
console.log(sayHello("Alice"));
function sayHelloOptional(name) {
    // The '?' after 'name' indicates that this parameter is optional.
    // If no argument is passed, 'name' will be 'undefined'.
    return `Hello, ${name || "World"}!`;
}
console.log(sayHelloOptional('bob')); // Optional parameter
console.log(sayHelloOptional()); // No argument passed, defaults to "World"
function ourOwnLog(message) {
    console.log(message);
}
ourOwnLog("This is a custom log message.");
function sumAllMyNumbers(...numbers) {
    // The '...' before 'numbers' indicates that this function can take any number of arguments.
    // 'numbers' will be an array of all the arguments passed to the function.
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAllMyNumbers(1, 2, 3, 4, 5)); // Outputs: 15
const divide = (a, b) => a / b; // Function that divides two numbers
const subtract = (a, b) => a - b; // Function that subtracts two numbers
console.log("divide", divide(10, 2)); // Outputs: 5
console.log("subtract", subtract(10, 2)); // Outputs: 8

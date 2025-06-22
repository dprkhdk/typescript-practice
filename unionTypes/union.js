"use strict";
let userId; // userId can be either a string or a number
userId = "Max"; // userId can also be a string
userId = 123; // userId can also be a number
const greeting = (user) => {
    if (typeof user === "string") {
        return "Hello, " + user.toUpperCase() + "!";
    }
    else {
        return `Hello, user with ID ${user}!`;
    }
};
console.log(greeting(123)); // Outputs: Hello, user with ID 123! or Hello, Max! depending on the value of userId
console.log(greeting("max"));

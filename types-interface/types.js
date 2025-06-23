"use strict";
console.log("--------------------Types in TypeScript--------------------");
const myName = {
    name: "Alice",
    //age: 30, // This will cause an error because 'age' is not part of the Name type
};
console.log(myName);
const myStatus = {
    isActive: true,
    //name: "Alice", // This will cause an error because 'name' is not part of the isActive type
};
console.log(myStatus);
const BigBossObj = {
    name: "John",
    age: 45,
    isActive: true,
    salary: 100000,
    position: "CEO",
    teamSize: 50,
    // department: "Management"
};
console.log(BigBossObj);
const id1 = "12345";
const id2 = 67890;
const userStatus = "active"; // valid
// const invalidStatus: Status = "deleted"; // This will cause an error because "deleted
console.log("--------------------Array Types in TypeScript--------------------");
let myArray = [1, 2, 3, 4, 5]; // Array of numbers 1st way
let myArray2 = [6, 7, 8, 9, 10]; // Array of numbers 2nd way 
let myArray3 = ["apple", 1, "banana", 2]; // Array of mixed types
let myArray4 = ["cherry", 3, "date", 4]; // Array of mixed types 2nd way
let myArray5 = [["apple", "banana"], ["cherry", "date"]]; // Array of arrays of strings
console.log(myArray, myArray2, myArray3, myArray4, myArray5);

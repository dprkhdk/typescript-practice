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

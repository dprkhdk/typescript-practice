"use strict";
//Bad practice: using 'any' type
const headerElement = document.getElementById('test-header');
console.log(headerElement.textContent); // "Type assertion to HTMLHeadingElement"
console.log(headerElement.textContent); // "Type assertion to HTMLHeadingElement 2nd way"
console.log(headerElement?.textContent); // "Type assertion to HTMLHeadingElement 3rd way with optional chaining"
function fetchPerson() {
    return { name: 'John', age: 30 };
}
const data = fetchPerson();
const person = data; // Type assertion to Person
console.log(person.name);
const summa = (a, b) => {
    return a + b;
};
const res = summa(5, "10"); // Type assertion to number
console.log(res); // 15

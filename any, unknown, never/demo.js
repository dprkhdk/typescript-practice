"use strict";
// any
console.log('-------------------- Any Type --------------------');
let anyting = "I am a string";
anyting = 42; // Now it's a number
anyting = true; // Now it's a boolean
anyting = { key: "value" }; // Now it's an object
anyting = [1, 2, 3]; // Now it's an array
console.log(anyting);
// unknown
let something = "I am a string";
//something.toupperCase(); // Error: Property 'toUpperCase' does not exist on type 'unknown'
if (typeof something === "string") {
    console.log(something.toUpperCase()); // Now it's safe to call toUpperCase
}
something = 42; // Now it's a number
if (typeof something === "number") {
    console.log(something * 2); // Now it's safe to call toFixed
}
// never
// function throwError(message: string): never { // Function that never returns 
//     throw new Error(message);// This function will always throw an error and never return
// }
// throwError("This is an error message");// This will throw an error and stop execution
function infiniteLoop() {
    let index = 0;
    while (true) {
        index++;
        console.log(`This will run forever ${index}`);
    }
}
//infiniteLoop(); // This will run indefinitely
function unionTypesCheck(props) {
    if (typeof props === "string") {
        console.log(`String value: ${props}`);
    }
    else if (typeof props === "number") {
        console.log(`Number value: ${props}`);
    }
    else {
        throw new Error("Invalid type");
    }
}
unionTypesCheck("Hello, World!");
unionTypesCheck(42);
//unionTypesCheck(true); // This will throw an error because true is not a string or number

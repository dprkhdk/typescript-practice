// Generics are a powerful feature in TypeScript that allow you to create reusable components that can work with any data type.
//Генеріки в TypeScript – це кастомний тип даних, який ви самі визначаєте. 
// Уявіть, що у вас є коробка, яку можна використовувати для будь-якого типу речей: книг, іграшок, фруктів.
// Але замість того, щоб створювати окрему коробку для кожного з цих типів, ви створюєте одну універсальну коробку і лише вказуєте, що саме всередині. 
// Ось і все – це і є генеріки.
console.log('-------------------- Generics --------------------');


// function echo(argument: any): any {
//     return argument;
// }
///////////////////////////////////////////////////Wrong way to use generics
// The above function uses 'any' type, which defeats the purpose of TypeScript's type
// safety. It allows any type to be passed in, but it doesn't provide any type checking
// or inference for the return type. This can lead to runtime errors if the types do not
// match as expected. Instead, we should use generics to ensure type safety and inference.
///////////////////////////////////////////////////Wrong way to use generics
// function echo2(argument: unknown): unknown {
//     return argument;
// }

// Correct way to use generics
function echo<T>(argument: T): T {
    return argument;
}
console.log(echo<string>("Hello, Generics!")); // Output: Hello, Generics!
console.log(echo<number>(42)); // Output: 42
console.log(echo<boolean>(true)); // Output: true
console.log(echo<object>({ key: "value" })); // Output: { key: "value" }
console.log(echo<string[]>(["apple", "banana", "cherry"])); // Output: ["apple", "banana", "cherry"]

const usersGeneric = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
]
function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map(item => item[key]);
}
const names = pluck(usersGeneric, 'name'); // Type is string[]
const ages = pluck(usersGeneric, 'age'); // Type is number[]
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
console.log(ages); // Output: [30, 25, 35]

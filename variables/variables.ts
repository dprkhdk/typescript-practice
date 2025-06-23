console.log('-------------------- Variables --------------------');


const myString: string = "Hello, World!"; // String type
const myNumber: number = 42;// Number type
const myBoolean: boolean = true;// Boolean type

const bigIntValue: bigint = 100n;// BigInt type

const mySymbol: symbol = Symbol("mySymbol");// Symbol type

const myStringArray: string[] = ["apple", "banana", "cherry"];// Array of strings

type User = { name: string, age: number, isActive: boolean };// Object type with specific properties

const user: User = {// Object type
  name: "Alice",
  age: 30,
  isActive: true
};

console.log(user);



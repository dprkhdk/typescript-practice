console.log("--------------------Types in TypeScript--------------------");


type HumanType = {
    name: string;
    age: number;
    isActive: boolean;
}

type Name = Pick<HumanType, "name">;
const myName: Name = {
    name: "Alice",
    //age: 30, // This will cause an error because 'age' is not part of the Name type
};
console.log(myName);

type isActive = Omit<HumanType, "name" | "age">;
const myStatus: isActive = {
    isActive: true,
    //name: "Alice", // This will cause an error because 'name' is not part of the isActive type
};
console.log(myStatus);

//type intersection (similar to extends in interfaces)
type EmployeeType = HumanType & {
    salary: number;
    position: string;
    department?: string;
}

type ManagerType = EmployeeType & {
    teamSize: number;
}

const BigBossObj: ManagerType = {
    name: "John",
    age: 45,
    isActive: true,
    salary: 100000,
    position: "CEO",
    teamSize: 50,
    // department: "Management"
};

console.log(BigBossObj);


// union types
type identifier = string | number;

const id1: identifier = "12345";
const id2: identifier = 67890;

type Status = "active" | "inactive" | "pending";
const userStatus: Status = "active"; // valid
// const invalidStatus: Status = "deleted"; // This will cause an error because "deleted

console.log("--------------------Array Types in TypeScript--------------------");

let myArray: number[] = [1, 2, 3, 4, 5]; // Array of numbers 1st way
let myArray2: Array<number> = [6, 7, 8, 9, 10]; // Array of numbers 2nd way 
let myArray3: (string | number)[] = ["apple", 1, "banana", 2]; // Array of mixed types
let myArray4: Array<string | number> = ["cherry", 3, "date", 4]; // Array of mixed types 2nd way
let myArray5: string[][] = [["apple", "banana"], ["cherry", "date"]]; // Array of arrays of strings

console.log(myArray, myArray2, myArray3, myArray4, myArray5);
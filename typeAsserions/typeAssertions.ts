//Bad practice: using 'any' type

const headerElement = document.getElementById('test-header');
console.log((headerElement as HTMLHeadingElement).textContent); // "Type assertion to HTMLHeadingElement"
console.log((<HTMLHeadElement>headerElement).textContent); // "Type assertion to HTMLHeadingElement 2nd way"
 console.log(headerElement?.textContent); // "Type assertion to HTMLHeadingElement 3rd way with optional chaining"
 


type Person = {
    name: string;
    age: number;
}
function fetchPerson(): unknown {
    return { name: 'John', age: 30 };
}
const data = fetchPerson();
const person = data as Person; // Type assertion to Person
console.log(person.name);


const summa = (a: number, b: number): number => {
    return a + b;
}
const res = summa(5, "10" as unknown as number ); // Type assertion to number
console.log(res); // 15
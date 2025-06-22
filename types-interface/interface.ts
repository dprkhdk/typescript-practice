console.log("--------------------Interfaces in TypeScript--------------------");

//if you don't know why you to use interface - use types !!!!!!!!!!!!!!!
interface Human { 
    name: string;
    age: number;
    isActive: boolean;
}

interface Human{
    surname?: string;
}

interface Employee{
    salary: number;
    position: string;
    department?: string;
}
interface Manager extends Employee, Human { 
    teamSize: number;
    
}

class WorkFinder implements Human, Employee{
    name: string;
    age: number;
    isActive: boolean;
    salary: number;
    position: string;
    department?: string;

    constructor(name: string, age: number, isActive: boolean, salary: number, position: string, department?: string) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
}

class BigBoss implements Manager, Human {
    name: string;
    surname: string;
    age: number;
    isActive: boolean;
    salary: number;
    position: string;
    department?: string;
    teamSize: number;

    constructor(name: string, surname: string, age: number, isActive: boolean, salary: number, position: string, teamSize: number, department?: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isActive = isActive;
        this.salary = salary;
        this.position = position;
        this.teamSize = teamSize;
        this.department = department;
    }
}
const Denys = new BigBoss("Denys","Prykhodko", 30, true, 1000, "CEO", 10, "Management");
console.log(Denys);
"use strict";
console.log("--------------------Interfaces in TypeScript--------------------");
class WorkFinder {
    constructor(name, age, isActive, salary, position, department) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
}
class BigBoss {
    constructor(name, surname, age, isActive, salary, position, teamSize, department) {
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
const Denys = new BigBoss("Denys", "Prykhodko", 30, true, 1000, "CEO", 10, "Management");
console.log(Denys);

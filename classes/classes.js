"use strict";
console.log('-------------------- Classes --------------------');
class Animal {
    constructor(name, sound, legs) {
        this.name = name;
        this.sound = sound;
        this.legs = legs;
        this.head = 1;
    }
    makeSound() {
        console.log(this.sound);
    }
    numberOfLegs() {
        console.log(`This animal has ${this.legs} legs.`);
    }
    headCount() {
        console.log(`This animal has ${this.head} head(s).`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name, "woof", 4); // Call the constructor of the parent class
    }
    bark() {
        console.log(`${this.name} says ${this.sound}`);
    }
    describe() {
        console.log(`i am a dog named ${this.name}, I have ${this.legs} legs`);
    }
}
const myDog = new Dog("Buddy");
myDog.bark();
myDog.describe();
myDog.headCount(); // Accessing the public method from the parent class
myDog.name = "Max"; // Changing the public property
myDog.describe(); // Calling the public method to describe the dog

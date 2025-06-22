class Animal {
    public name: string; // Public property, accessible from anywhere
    protected sound: string; // Protected property, accessible within the class and subclasses
    protected legs: number; // Protected property, accessible within the class and subclasses
    private head: number; // Private property, accessible only within the class

    constructor(name: string, sound: string, legs: number) {
        this.name = name;
        this.sound = sound;
        this.legs = legs;
        this.head = 1;
    }
    public makeSound() {// Public method to access the protected property
        console.log(this.sound);
        
    }
    public numberOfLegs() {// Public method to access the protected property
        console.log(`This animal has ${this.legs} legs.`);
    }
    public headCount() {// Public method to access the private property
        console.log(`This animal has ${this.head} head(s).`);
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name, "woof", 4); // Call the constructor of the parent class
    }
    public bark() { // Public method specific to Dog class
        console.log(`${this.name} says ${this.sound}`);
    }
    public describe() { // Public method to describe the dog
        console.log(`i am a dog named ${this.name}, I have ${this.legs} legs`);
        
    }
}
const myDog = new Dog("Buddy");
myDog.bark();
myDog.describe();

myDog.headCount(); // Accessing the public method from the parent class

myDog.name = "Max"; // Changing the public property
myDog.describe(); // Calling the public method to describe the dog

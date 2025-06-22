console.log('-------------------- Intersection Types --------------------');


type Car = { // Intersection type example
    wheels: number;
    engine: string;
}

type Boat = { // Intersection type example
    sails: number;
    engine: string;
}
type AmphibiousVehicle = Car & Boat; // AmphibiousVehicle is an intersection of Car and Boat, meaning it has properties from both types

const amphibiousVehicle: AmphibiousVehicle = { // Creating an object of type AmphibiousVehicle
    wheels: 4,
    engine: "V8",
    sails: 1
};
console.log(amphibiousVehicle);

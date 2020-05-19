// // Getters and Setters

// class Person {
//     constructor(name, age, heightInMm) {
//         this.name = name;
//         this.age = age;
//         this.heightInMm = heightInMm;
//     }
//     get heightInInches() {    // this is what we want to find - what we want to 'get'
//         return this.heightInMm / 25.4;   //google gives us this formula to convert mm to inch
//     }
//     set heightInInches(value) {
//         this.heightInMm = value * 25.4
//     }
//     get heightInCm() {        // we want to 'get' the value of heightInMm in cm thats why we are ( / 10 )
//         return this.heightInMm / 10;
//     }
// }
// let me = new Person("Aileen", 37, 1500);
// console.log(me);  // this will output the info of the me created with Person properties

// console.log(me.heightInInches); // this is like above but runs through the get heightInInches and outputs that as that is what we told consol.log to do
// console.log(me.heightInCm);   // like above but 'get' heightInCm

// me.heightInInches = 50;
// console.log(me.heightInMm); 

// Inheritance
//
class Pet {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    getInfo() {
        return `${this.name} the ${this.species} is ${this.age} years old.`;
    }
}
class Dog extends Pet {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    getBreedInfo() {
        return `${this.name} is a ${this.breed}.`;
    }
    getInfo() {
        return super.getInfo() + this.getBreedInfo();
    }
}
class Jack extends Dog {
    constructor(name, age) {
        super(name, age, "Dog", "Jack Russell")
    }
}
let cat = new Pet("Felix", 2, "cat");
let dog = new Dog("Rex", 4, "dog", "Jack Russell");
let jack = new Jack("Muddy", 12);
console.log(cat);
console.log(dog);
console.log(dog.getInfo());
console.log(jack.getInfo());
console.log(dog.getBreedInfo());
console.log(jack.getBreedInfo());



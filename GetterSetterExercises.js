// Getters and Setters Exercises

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }
    get areaOfSquare() {
        return this.sideLength * this.sideLength  // or can be done this way return this.sideLength ** 2;
    }
    set areaOfSquare(value) {
        this.sideLength = Math.sqrt(value);
    }
}
let mySquare = new Square(16);   // sideLength = 16
console.log(mySquare.areaOfSquare);
mySquare.areaOfSquare = 100;  // this sets the areaOfSquare to be 100, so now my sideLength has become 10, not 16 
console.log(mySquare);       // only shows my object and its properties
console.log(mySquare.areaOfSquare);   // shows my calculation , the value of areaOfSquare in my object mySquare


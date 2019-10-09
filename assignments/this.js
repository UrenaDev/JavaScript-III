/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - When 'this' is used in the global scope, its value is the entire window.
* 2. Implicit binding - When 'this' is used with a dot, the object that is before this dot will be 'this' when it is called with a function
* 3. New binding -  When 'this' is used within a constructor it refers to the object that is created by the constructor.
* 4. Explicit binding - We can set 'this' to point to a certain value when called with .apply or .call
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
let car = {
    Make: 'Ford',
    Model: 'Fusion',
    Year: '2017',
    carInfo: function() {
        console.log(`Here we have a ${this.Make} ${this.Model} ${this.Year}`)
    }
}
car.carInfo();
// code example for Implicit Binding

// Principle 3
function PowerRanger(dinosaur) {
    this.say = "It's Morphin time!... ";
    this.dinosaur = dinosaur;
    this.speak = function() {
        console.log(this.say + this.dinosaur);
    };
}

const tyranosaurus = new PowerRanger('TYRANOSAURUS!')

tyranosaurus.speak();

// code example for New Binding

// Principle 4
let object1 = {
    color: 'Red'
}

let object2 = {
    color: 'Green'
}

function logThis() {
    console.log("'This' = ", this);
}

logThis.call(object1);
logThis.call(object2);

// code example for Explicit Binding
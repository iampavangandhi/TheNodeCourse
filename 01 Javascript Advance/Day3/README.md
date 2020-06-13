# Day3

## OOPS, Funtional Programming & Object Prototypes

### Youtube Resource for Beginners: [OOPS](https://youtu.be/vDJpGenyHaA) and [High Order Functions](https://youtu.be/rRgD1yVwIvE)

### Resouce: [OOPS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS) and [Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

### Must Read: [OOPS](https://medium.com/better-programming/object-oriented-programming-in-javascript-b3bda28d3e81) and [Functional Programming](https://medium.com/@bojangbusiness/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)

## OOPS

There are certain features or mechanisms which makes a Language Object Oriented like:

- Object (Covered in Day1)
- Classes
- Encapsulation
- Inheritance

### Classes

Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class or the concrete implementation.

Example:
Lets use ES6 classes then we will look into traditional way of defining Object in the **Object Prototype** part.

```javascript
// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name}.`;
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails()); //The name of the bike is Hayabusa
```

### Encapsulation

he process of wrapping property and function within a single unit is known as encapsulation.
Let’s understand encapsulation with an example.

```javascript
//encapsulation example
class person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name},Address is: ${this.add}`);
  }
}

let person1 = new person("Mukul", 21);
person1.add_Address("Delhi");
person1.getDetails();
```

### Inheritance

It is a concept in which some property and methods of an Object is being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Object inherits Object i.e. certain features (property and methods)of one object can be reused by other Objects.
Lets’s understand inheritance with example:

```javascript
//Inhertiance example
class person {
  constructor(name) {
    this.name = name;
  }
  //method to return the string
  toString() {
    return `Name of person: ${this.name}`;
  }
}
class student extends person {
  constructor(name, id) {
    //super keyword to for calling above class constructor
    super(name);
    this.id = id;
  }
  toString() {
    return `${super.toString()},Student ID: ${this.id}`;
  }
}
let student1 = new student("Mukul", 22);
console.log(student1.toString());
```

## Functional Programming

Functional programming is a programming paradigm, meaning that it is a way of thinking about software construction based on some fundamental, defining principles (listed above). Other examples of programming paradigms include object oriented programming and procedural programming.

### Concepts of functional programming:

- Pure functions
- Recursion
- Referential transparency
- Functions are First-Class and can be Higher-Order
- Variables are Immutable

To read more about them click [here](https://www.geeksforgeeks.org/functional-programming-paradigm/)

### IIFE

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```javascript
(function () {
  statements;
})();
```

## Object Prototype

All JavaScript objects inherit properties and methods from a prototype.

### Example

```javascript
// Defining class in a Traditional Way.
function Vehicle(name, maker, engine) {
  (this.name = name), (this.maker = maker), (this.engine = engine);
}

Vehicle.prototype.getDetails = function () {
  console.log("The name of the bike is " + this.name);
};

let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails()); //The name of the bike is Hayabusa
```

## Prototype Inheritance

All JavaScript objects inherit properties and methods from a prototype:

- Date objects inherit from Date.prototype
- Array objects inherit from Array.prototype
- Person objects inherit from Person.prototype

The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.

### Example

The JavaScript prototype property allows you to add new properties to object constructors:

```javascript
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
```

View more examples [here](https://www.w3schools.com/js/js_object_prototypes.asp)

## Excercise

Note: You can solve them anywhere you want if you stuck see the solution.
You don't have to submit the solution to me they are just for your practice.

### Based on functions: [here](https://edabit.com/challenge/tmnCStcrkdWbreKP5)

### Based on classes: [here](https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn)

### Shiritori Game(Hard): [here](https://edabit.com/challenge/6o5tYwwbY2ys7XTm4)

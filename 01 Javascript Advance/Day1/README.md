# Day1

# Datatypes and Objects (with let,var and const)

### Youtube Resource for Beginners: [link](https://youtu.be/hdI2bqOjy3c)

### Resouce: [Datatypes and Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) & [let, var and const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

## Datatypes

Javascript has some built-in data structures which we will discuss in this.

### Dynamic Typing

JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```javascript
let x = 42; // x is now a number
x = "bar"; // x is now a string
x = true; // x is now a boolean
```

This means that the same variable can be used to hold different data types:

### Primitive Data Type

A primitive data value is a single simple data value with no additional properties and methods.

```javascript
typeof "Pavan"; // Returns "string"
typeof 20.5; // Returns "number"
typeof false; // Returns "boolean"
typeof x; // Returns "undefined" (if x has no value)
```

The typeof operator can return one of these primitive types:

    string
    number
    boolean
    undefined

### Complex Data Type

```javascript
typeof { name: "Pavan", age: 20 }; // Returns "object"
typeof [1, 2, 3, 4]; // Returns "object" (not "array")
typeof null; // Returns "object"
typeof function myFunc() {}; // Returns "function"
```

The typeof operator can return one of two complex types:

    object
    object
    object
    function

### Difference Between Undefined and Null

**undefined** and **null** are equal in value but different in type:

```javascript
typeof undefined; // undefined
typeof null; // object

null == undefined; // true
null === undefined; // false (check for the exact same)
```

## Objects

Objects are variables too. But objects can contain many values.

### Object Definition

This code assigns many values ("Pavan", 20, true) to a variable named car:

```javascript
let person = { name: "Pavan", age: 20, isActive: true };
```

The values are written as name:value pairs (name and value separated by a colon).

### Accessing Object Properties

The name:values pairs in JavaScript objects are called properties:

    person.name //Returns Pavan

    person["name"] //Returns Pavan

### Object Methods

Objects can also have methods.
Methods are actions that can be performed on objects.

```javascript
let person = {
  firstName: "Pavan",
  lastName: "Gandhi",
  id: 506,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

```javascript
person.fullName(); //Returns Pavan Gandhi
```

## Difference Between let, var and const

### let vs var

**let** allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the **var** keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

```javascript
function varTest() {
  var x = 1;
  {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

for more detail view [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

### const

This declaration creates a constant whose scope can be either global or local to the block in which it is declared.

```javascript
const name = "Pavan";
name = "John"; //Throws an error
```

for more detail view [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

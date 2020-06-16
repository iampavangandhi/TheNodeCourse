# Concept 5

## ECMASCript 6, 2016, 2017 and above.

### Youtube resources: [ES6 Javascript](https://youtu.be/WZQc7RUAg18)

### Resouce: [ES6](http://es6-features.org/#Constants)

## ECMAScript 6

It is also known as ES6.

- It is not a brand new language!
- It is the same old JavaScript but with a more beautiful syntax and more features.

### ECMAScript 6 Features

- String + Array + Object APIs
- Symbols
- Template Literals
- Let + Const
- Destructuring
- Default + Rest + Spread
- Arrows and Lexical this
- Classes
- Enhanced Object Literals
- Iterators + for..of
- Modules
- Map + Set + WeakMap + WeakSet
- Promises

## String + Array + Object APIs

In ES6 we have many new library additions, including core Math libraries, Array conversion helpers and Object.assign() for copying.

```javascript
"hello".startsWith("hell"); // true
"hello".endsWith("ello"); // true
"hello".includes("ell"); // true
"doo ".repeat(3); // 'doo doo doo '
```

```javascript
Array.from(document.querySelectorAll("*")); // Returns a real Array
Array.of(1, 2, 3); // Similar to new Array(...), but without special one-arg behavior

[0, 0, 0].fill(7, 1); // [0,7,7]
[1, 2, 3].findIndex((x) => x == 2); // 1

["a", "b", "c"].entries(); // iterator [0, 'a'], [1,'b'], [2,'c']
["a", "b", "c"].keys(); // iterator 0, 1, 2
["a", "b", "c"].values(); // iterator 'a', 'b', 'c'

Object.assign(Point, { origin: new Point(0, 0) }); // Assigns new parameters for 'Point' object.
```

## Symbols

Symbol is a new primitive type in ECMAScript 6. They are tokens that serve as unique IDs.
You create symbols via the factory function **Symbol()**. They are always unique. Each time we create a new symbol, we're actually creating a new unique identifier which never clashes with anything else in our project. So that's why it makes them useful in some cases.

```javascript
const COLOR_RED = Symbol();
const COLOR_ORANGE = Symbol();
console.log("each Symbol() is always unique: ", Symbol() === Symbol()); // Yes, it returns false.
// They can also help us create unique dynamic methods for our objects and classes.

const MY_KEY = Symbol();
let obj0 = {};
obj0[MY_KEY] = 123;
console.log("my dynamic object method: ", obj0[MY_KEY]); // 123
```

## Template literals

Template literals provide syntactic sugar for constructing strings. The literal itself is delimited by backticks, the interpolated expressions inside the literal are delimited by \${var}. Template literals always produce strings.

```javascript
// Multiline strings
const HTML5_SKELETON = `
  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
  </body>
  </html>`;

// Interpolate variable bindings
let name = "Bob",
  time = "today";
let greeting = `Hello ${name}, how are you ${time}?`;

// Tagged templates
let str = String.raw`This is a text
with multiple lines.
Escapes are not interpreted,
\n is not a newline.`;
```

## Let + Const

ES6 provides two new ways to declare variables: let and const, which mostly replace the ES5 way
of declaring variables, var. let works similarly to var, but the variable it declares is block-scoped,
it only exists within the current block. var is function-scoped.

**const** works like **let**, but the variable you declare must be immediately initialized, with a value that cannot be changed afterwards.
NOTE: **const** only means that the variable itself is immutable. So if the variable is an object, the properties of that object are still mutable!
So the solution to that is the Javascript **freeze()** method.

```javascript
NOTE: const pitfall! const only means that the variable itself is immutable. So if the variable is an object, the properties of that object are still mutable! So the solution to that is the Javascript freeze() method.
```

## Destructuring

Destructuring allows binding using pattern matching, with support for matching arrays and objects.

```javascript
// Let's understand destructuring better...
let obj1 = {};
obj1.first = "Jane";
obj1.last = "Doe"; // This is how we can construct data

let f1 = obj1.first;
let l1 = obj1.last; // And this is how we can extract data out of it. right?

// Now for constructing we could also use object literal:
let obj2 = { first: "Jane", last: "Doe" };
// destructuring is also similar to it! it's just the opposite of
// constructing. It lets us to extract data easier.

let { first: f2, last: l2 } = obj2; // Now we have f2 and l2 variables available.
// Destructing works with arrays too
let [x1, y1] = ["a", "b"]; // x1 = 'a'; y1 = 'b'

// Computed property keys
const FOO = "foo";
let { [FOO]: f4 } = { foo: 123 }; // f4 = 123
```

## Default + Rest + Spread

ES6 provides a new and better way of defining default values for parameters in our functions:

```javascript
// In ES5, you specify default values for parameters like this:
function foo(x, y) {
  x = x || 0;
  y = y || 0;
  // do something
}
// ES6 has nicer syntax:
function foo(x = 0, y = 0) {
  // y is 0 if not passed (or passed as undefined)
}
// In ES6, you can use destructuring in parameter definitions and the code
// becomes simpler:
function selectEntries1({ start = 0, end = -1, step = 1 } = {}) {
  // do something
}
// Above function is equivalent to this one.
function selectEntries2(options) {
  options = options || {};
  var start = options.start || 0;
  var end = options.end || -1;
  var step = options.step || 1;
  // do something
}
```

## Arrows and Lexical this

Arrows are a function shorthand using the => syntax. But unlike functions, arrows share the same lexical this as their surrounding code.

```javascript
var fives = [];
nums.forEach((v) => {
  // See? for more complex statement we can put everything inside {} just like
  // how we do it with normal functions.
  if (v % 5 === 0) fives.push(v);
});
```

```javascript
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach((f) =>
      // 'this' keyword simply refers to the 'bob' Object in our closure not
      // the closure itself.
      console.log(this._name + " knows " + f)
    );
  },
};
class UiComponent {
  constructor() {
    let button = document.getElementById("myButton");
    button.addEventListener("click", () => {
      // By using arrow functions, 'this' keyword simply refers to our
      // own 'UiComponent' class not the closure. This is awesome in ES6.
      // We no more need to use bind() in such cases...
      this.handleClick();
    });
  }
  handleClick() {
    console.log("CLICK");
  }
}
```

## Map + Set + WeakMap + WeakSet

### Map

```javascript
// Create an empty Map
let map = new Map();
// We can also fill out the map right at the moment that we're initializing it.
let map = new Map([
  [1, "one"],
  [2, "two"],
]);

// The set() method of Map is chain-able. So we can fill out the map like this too.
let map = new Map().set(1, "one").set(2, "two");

// Any value can be a key, even an object!
// We can also set an OR operator if what we're going to get was undefined for
// some reasons: map.get(KEY) || 0;
const KEY = {};
map.set(KEY, 123);
map.get(KEY); // 123
map.has(KEY); // true
map.delete(KEY); // true
map.size; // 1
map.clear(); // To empty the map

// keys() returns an iterable over the keys in the Map.We can use it in a
// for-of loop for instance.
map.keys();

// values() returns an iterable over the values in the Map.
map.values();

// entries() returns the entries of the Map as an iterable over [key,value]
// pairs (Arrays).
// NOTE: We can use destructuring in a for-of loop to access both, keys and
// values, just like what we can do with the entries() method of an array.
map.entries();
```

### WeakMap

It’s a Map that doesn’t prevent its keys from being garbage-collected. That means that you can associate data with objects without having to worry about memory leaks. A WeakMap is a data structure whose keys must be objects and whose values can be arbitrary values. It has the same API as Map, with one significant difference: you can’t iterate over the contents — neither the keys, nor the values, nor the entries.

### Set

ECMAScript 5 doesn’t have a Set data structure, either. There are two possible work-arounds:
Use the keys of an object to store the elements of a set of strings.
Store (arbitrary) set elements in an Array: Check whether it contains an element via indexOf(), remove elements via filter(), etc. This is not a very fast solution, but it’s easy to implement. One issue to be aware of is that indexOf() can’t find the value NaN.

```javascript
let set = new Set();
// We can also fill out the set right at the moment that we're initializing it.

let set = new Set(["red", "green", "blue"]);
// The add() method of Set is chain-able. So we can fill out the set like this too.

let set = new Set().add("red").add("green").add("blue");
set.add("red");
set.has("red"); // true
set.delete("red"); // true
set.size; // 1
set.clear(); // To empty the set
```

### WeakSet

It’s a Set that doesn’t prevent its elements from being garbage-collected.

### for more see [Here](https://www.youtube.com/watch?v=WZQc7RUAg18)

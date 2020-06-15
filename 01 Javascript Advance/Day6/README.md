# Day6

## Promise and Arrow Functions

### Youtube resources: [Promises](https://youtu.be/DHvZLI7Db8E) and [Arrow Functions](https://youtu.be/h33Srr5J9nY)

### Resouces: [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Promises

Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

### Benefits of Promises

- Improves Code Readability
- Better handling of asynchronous operations
- Better flow of control definition in asynchronous logic
- Better Error Handling

### A Promise has four states:

- fulfilled: Action related to the promise succeeded
- pending: Promise is still pending i.e not fulfilled or rejected yet
- rejected: Action related to the promise failed

### A promise can be created using Promise constructor.

```javascript
var promise = new Promise(function (resolve, reject) {
  //do something
});
```

### Parameters

- Promise constructor takes only one argument,a callback function.
- Callback function takes two arguments, resolve and reject
- Perform operations inside the callback function and if everything went well then call resolve.
- If desired operations do not go well then call reject.

### Example

```javascript
var promise = new Promise(function (resolve, reject) {
  const x = "google";
  const y = "google";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are a Geek");
  })
  .catch(function () {
    console.log("Some error has occured");
  }); //Output: Success, You are a Geek
```

### Why Promises are better then Callbacks with an example

The Callback Way

```javascript
function isUserTooYoung(id, callback) {
  openDatabase(function (db) {
    getCollection(db, "users", function (col) {
      find(col, { id: id }, function (result) {
        result.filter(function (user) {
          callback(user.age < cutoffAge);
        });
      });
    });
  });
}
```

The Promises way

```javascript
function isUserTooYoung(id) {
  return openDatabase()
    .then(getCollection)
    .then(find.bind(null, { id: id }))
    .then(function (user) {
      return user.age < cutoffAge;
    });
}
```

### Applications

- Promises are used for asynchronous handling of events.
- Promises are used to handle asynchronous http requests.

more examples [here](https://www.geeksforgeeks.org/javascript-promises/)

## Arrow Functions

Arrow functions were introduced in ES6.
Arrow functions allow us to write shorter function syntax:

### Syntax

```javascript
//normal function
var hello = function () {
  return "Hello World!";
};

//arrow function
var hello = () => {
  return "Hello World!";
};
```

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.

```javascript
//arrow functions return value by default
var hello = () => "Hello World!";

//arrow function with parameters
var hello = (val) => "Hello " + val;
```

more examples [here](https://www.w3schools.com/js/js_arrow_function.asp)

## Excercise

Note: You can solve them anywhere you want if you stuck see the solution.
You don't have to submit the solution to me they are just for your practice.

### Questions

- Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.

- Write a function that use Promises that you can chain! The function, makeAllCaps(), will take in an array of words and capitalize them. If the array contains anything other than strings it should throw an error.

- Write a function that use Promises that you can chain! The function, sortWords(), will sort the words in alphabetical order. If the array contains anything other than strings it should throw an error.

### Solution

See solutions [here](https://repl.it/@AdamCahan/Promise-practice-exercises#main.js)

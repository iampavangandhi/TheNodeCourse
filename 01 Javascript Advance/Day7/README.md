# Day7

## Async/Await

### Youtube resources: [Async/Await](https://www.youtube.com/watch?v=PoRJizFvM7s)

### Resouces: [[Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)]

## Async/Await

- A way to write asynchronous cide in JavaSCrip
- It is non blocking
- Async/Await was created to simplify the process of working with and writing chained promises
- Async/Await is the extension of promises

## Async

Async functions return a Promise. If the function throws an error, the Promise will be rejected. If the function returns a value, the Promise will be resolved.

### Syntax

Writing async function is quite simple. You just need to add the **async** keyword prior to **function**

```javascript
// Normal Function
function add(x, y) {
  return x + y;
}
// Async Function
async function add(x, y) {
  return x + y;
}
```

## Await

Async functions can make use of the **await** expression. This will pause the **async** function and wait for the Promise to resolve prior to moving on.

### Example

```javascript
const getData = async () => {
  var y = await "Hello";
  console.log(y);
};

console.log(1);
getData();
console.log(2);
```

```
Output:
1
2
Hello

// Note: Console prints 2 before "Hello".
```

### for more see [here](https://www.geeksforgeeks.org/async-await-function-in-javascript/)

### for more examples see [here](https://javascript.info/async-await)

## Excercise

### The above link also have little tasks to do. Try to do those.

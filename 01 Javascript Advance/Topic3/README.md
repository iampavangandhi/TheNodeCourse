# Concept 3

## Asynchronous Programming

### Resouce: [Asynchronous Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

## Introduction

By design, JavaScript is single-threaded, which means that it can only handle one operation at a time. Because there is a single execution thread for our program to run, a question then arises: How do we go about executing a long-running operation without blocking the thread of execution? Well, welcome to asynchronous programming.

Asynchronous programming in JavaScript offers a great way of handling operations (I/O) that are not immediately executed and therefore have no immediate response. Rather than waiting for long-running operations to return, blocking the execution thread in the process, they are delegated to callbacks, which are functions that are called when these operations finally return.

## Example

```javascript
// normal function
function add(x, y) {
  return x + y;
}

// async function
async function add(x, y) {
  return x + y;
}
```

```javascript
// try running it
async function hello() {
  return (greeting = await Promise.resolve("Hello"));
}

hello().then(alert);
```

## Conclusion

We have seen that callbacks are simple functions passed to other functions and are only executed when an event is completed. We have also seen that callbacks and promises are equivalent, as callbacks can be wrapped to expose a promise-based interface, and vice versa.

Furthermore, we have seen that async functions run independently in the background, without interfering with the main thread of our application. Due to their nature, they can return with a response (data or error) whenever they are ready, thus not interfering with other running processes in our application.

### For super detail explaination see [this](https://eloquentjavascript.net/11_async.html)

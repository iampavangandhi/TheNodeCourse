# Day5

## Callback & Closure

### Youtube Resource: [Closure](https://www.youtube.com/watch?v=71AtaJpJHw0) and [Callback](https://www.youtube.com/watch?v=pTbSfCT42_M)

### Resource: [Callback](https://developer.mozilla.org/en-US/docs/Glossary/Callback_functions) and [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#:~:text=A%20closure%20is%20the%20combination,scope%20from%20an%20inner%20function.)

### Callback

In JavaScript, you know, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a **callback function**.

To say it simply, a callback is a function that is to be executed after another function has finished executing ( -- hence the name 'call back') .

### Why do we need Callbacks?

is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events.
Example:

```javascript
function first() {
  // Simulate a code delay
  setTimeout(function () {
    console.log(1);
  }, 500);
}
function second() {
  console.log(2);
}
first(); //Output will be -  2
second(); //Output will be -  1
```

In the example above, **setTimeout()** just gives a delay of 500 millisecond.
Here, even though we invoked the first() function first, we logged out the result of that function after the second() function.

It is not that JavaScript did not execute these functions in th order we wanted, it is just that JavaScript did not wait for response from **first()** before mpving on to execute **second()**

**Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.**

#### Where Callback is used?

Callbacks are generally used when the function needs to perform events before the callback is executed, or when the function does not (or cannot) have meaningful return values to act on, as is the case for Asynchronous JavaScript (based on timers) or XMLHttpRequest requests.

For more examples [link](https://www.dashingd3js.com/lessons/javascript-callback-functions)

### Closure

A closure is a function that has access to the parent scope(lifespan of a variable in javascript), even after the scope has closed.

A closure gives you access to an outer function’s scope from an inner function.

In JavaScript, closures are created every time a function is created, at function creation time.
(In JavaScript, closures are created every time a function is created, at function creation time.)

```javascript
//closure example
function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2
```

In the example above, the function numberGenerator creates a local “free” variable num (a number) and checkNumber (a function which prints num to the console).

The function checkNumber doesn’t have any local variables of its own — however, it does have access to the variables within the outer function, numberGenerator, because of a closure.

Therefore, it can use the variable num declared in numberGenerator to successfully log it to the console even after numberGenerator has returned.

To read more about them click [here](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)

## Excercise

Note: You can solve them anywhere you want if you stuck see the solution.
You don't have to submit the solution to me they are just for your practice.

### A Simple Excercise on Closure: [here](https://edabit.com/challenge/rLybgi7vcxL2ykt8F)

### Based on Closure: [here](https://edabit.com/challenge/FkH4K9TpFG98t52Ex)

### One more: [here](https://edabit.com/challenge/nhW7dXvLWrQoepyFs)

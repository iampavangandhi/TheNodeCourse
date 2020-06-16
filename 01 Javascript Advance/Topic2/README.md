# Concept 3

## Code Hoisting

### Youtube resources: [Hoisting](https://www.youtube.com/watch?v=7tGmS2SPxBo)

### Resouces: [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

## Hoisting

Before understanding hoisting, lets try to understand these two simple codes.

```javascript
function catSays(sound) {
  console.log(sound);
}
catSays("meaw");
```

As expected when we invoke our catSays function — passing in a custom string, we get that string logged to the console. In this case, 'meaw'.

```javascript
catSays("meaw");
function catSays(sound) {
  console.log(sound);
}
```

Perhaps unexpectedly, 'meaw' is once again logged to the console. **This is hoisting.**

Most commonly, people will explain hoisting as declarations being moved to top of your code.
What’s actually happening is that your function and variable declarations are added to memory during the compile phase.

Now, consider example below.

```javascript
console.log(a);
var a = 3;
// undefined
```

Here, output will be undefined. Why is this? **It is because JavaScript only hoists declarations.** Initializations are not hosted

### Best Practices

Because of hoisting, it’s considered a best practice to always declare your variables at the top of their respective scopes. This way there are no undesirable effects. You should also always try to initialize variables when you declare them. This will provide cleaner code and help avoid undefined variables.

for more info see [here](https://scotch.io/tutorials/understanding-hoisting-in-javascript#:~:text=Hoisting%20is%20a%20JavaScript%20mechanism,scope%20is%20global%20or%20local.)

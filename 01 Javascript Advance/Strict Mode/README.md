# Concept 1

## Strict Mode

### Resouce: [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

## "use strict"

The "use strict" directive was new in ECMAScript version 5.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

## Changes

Strict mode makes several changes to normal JavaScript semantics:

Eliminates some JavaScript silent errors by changing them to throw errors.
Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
Prohibits some syntax likely to be defined in future versions of ECMAScript.

## Examples

```javascript
"use strict";
x = 3.14; // This will cause an error because x is not declared
```

```javascript
"use strict";
x = 3.14; // This will cause an error because x is not declared
```

```javascript
x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14; // This will cause an error
}
```

### More Examples [Here](https://www.w3schools.com/js/js_strict.asp)

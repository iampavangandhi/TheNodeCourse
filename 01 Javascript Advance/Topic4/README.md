# Concept 4

## Javascript Module Pattern

### Resouce: [Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## Modules

In JavaScript, a module is a small unit of independent, reusable code. Modules are the foundation of many JavaScript design patterns and are critically necessary when building any non-trivial JavaScript-based application.

JavaScript module export as the value rather than define a type, as JavaScript JavaScript module can export an object, Modules that export a string containing an HTML template or a CSS stylesheet are also common.

JavaScript doesn’t have private keyword but we can achieve private methods and properties using closures.

```javascript
var myModule = (function () {
  "use strict";
  var _privateProperty = "Hello World";

  function _privateMethod() {
    console.log(_privateProperty);
  }

  return {
    publicMethod: function () {
      _privateMethod();
    },
  };
})();


myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.\_privateProperty); // is undefined
protected by the module closure
myModule.\_privateMethod(); // is TypeError protected by the module closure
```

these modules can have exported to the other JS files using the export keyword,

```javascript
//myMOdule.js

fileexport default myModule;
```

modules can import to another JS file

```javascript
//second.js file
import myModule from ‘./myModule’;
```

### Why do we need to use a Module?

There are a lot of benefits to using modules in favor of a sprawling,

some are,

- Maintainability
- Reusability
- Namespacing

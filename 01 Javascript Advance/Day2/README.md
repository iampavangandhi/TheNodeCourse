# Day2

## Functions, scope and this keyword

### Youtube Resource for Beginners: [link](https://www.youtube.com/watch?v=AY6X5jZZ_JE)

### Resouce: [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) & [this keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

## Functions

In Javascript every function is a Function object.

### Function Declaration

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

```javascript
function name(parameter1, parameter2, parameter3) {
  // code
}
```

Inside the function, the arguments (the parameters) behave as local variables.
Function parameters - listed inside the parentheses () in the function definition.
Function arguments - values received by the function when it is invoked.


##Function Expression
Function Expression has the same syntax as a function declaration.
```javascript
var myFunction = function name(parameter1, parameter2, parameter3) {
    //code
};
```
Example for function expression
```javascript
var evenOrOdd = function(num){
if(num%2 == 0){
return "even";
}
else{
return "odd";
}
};
document.write(evenOrOdd(10));
```

#Anonymous function i.e. function without name is also possible in JS.
```javascript
var myFunction = function (parameter1, parameter2, parameter3) {
    //code
}
```

### Passing Functions to other Functions

Here, function is passed as a parameter to a function

```javascript
var studentIDs = [30,10,20,5,100]
studentIds.sort(function(num1,num2){
return num1-num2;
});

document.write(studentIds);
```

### Adding method to a object

Here's example for it.
```javascript
var student = {
id: 1,
name:"BOB",
display: function (){
document.write(student.id + "<br/>");
document.write(student.name);
}
};

student.display();
}

```


### Arguments

JS takes as number of parameters

```javascript
function product(){
var result = 1;
for(var i = 0; i <arguments.length; i++){
result*=arguments[i];
}
return result;
}

document.write(product(3,4,5));
```
All these arguments can be accessed by using arguments.

### this keyword

"this" keyword refers to an object, that object which is executing the current bit of javascript code.

```javascript
var student = {
id: 1,
name:"BOB",
display: function (){
document.write(student.id + "<br/>");
document.write(student.name);
}
};

student.display();
}
```
In the above code instead of using student.id and student.name, it can be written as this.id and this.name as this keyword refers to object
```javascript
var student = {
id: 1,
name:"BOB",
display: function (){
document.write(this.id + "<br/>");
document.write(this.name);
}
};

student.display();
}
```
### Scope

Basically in JavaSCript there are two scopes: Local Scope & Global Scope.
In JS, each function creates a new scope.

## What scope does?
Scope determines the accessibility of these variables.

Variables defined inside a function are not accessible (visible) from outside the function.

## Local Variables
Variables declared within a JavaScript function, cannot be used outside the function.
```javascript
// code here can NOT use myName

function nameFunction() {
  var myName = "Rutuja";

  //code here can use myName

}
}
```
Note: Variables used declared inside functions are local to particular functions only, varibles with same name can be used outside functions.

## Global Variables
Variables defined outside functions are global variables.
All scripts and functions on a web page can access global variables. 
```javascript
var myName = "Rutuja";

//code here can use myName

function nameFunction() {

  //code here can use myName

}
```

Assigning a value to a variable which is not declared, it will automatically become a global variable.
nameFunction();

```javascript
// code here can use myName

function nameFunction() {
  myName = "Rutuja";
}
```
In a web browser, global variables are deleted when you close the browser window.

for more info about this topic view [link1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
and [link2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

# Middlewares with Third Party Middleware like Body-Parser

### Resources for middlewares: [Link](https://www.javatpoint.com/expressjs-middleware) and [Link](https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm)

## Express.js Middleware

Express.js Middleware are different types of functions that are invoked by the Express.js routing layer before the final request handler. As the name specified, Middleware appears in the middle between an initial request and final intended route. In stack, middleware functions are always invoked in the order in which they are added.

Middleware is commonly used to perform tasks like body parsing for URL-encoded or JSON requests, cookie parsing for basic cookie handling, or even building JavaScript modules on the fly.

## What is a Middleware function

Middleware functions are the functions that access to the request and response object (req, res) in request-response cycle.

### A middleware function can perform the following tasks:

- It can execute any code.
- It can make changes to the request and the response objects.
- It can end the request-response cycle.
- It can call the next middleware function in the stack.

### Following is a list of possibly used middleware in Express.js app:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

### Here is a simple example of a middleware function in action −

```javascript
var express = require('express');
var app = express();

//Simple request time logger
app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());

   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware
   function/route handler.
   next();
});

app.listen(3000);
```

The above middleware is called for every request on the server. So after every request, we will get the following message in the console −

```
A new request received at 1467267512545
```

## Order of Middleware Calls

One of the most important things about middleware in Express is the order in which they are written/included in your file; the order in which they are executed, given that the route matches also needs to be considered.

📁 You can see code in Code Folder. **Here's the [link](https://github.com/iampavangandhi/TheNodeCourse/tree/master/03%20Expressjs/Topic5/Code)**

When we visit '/' after running this code, we receive the response as Middle and on our console −

```
Start
Middle
End
```

The following diagram summarizes what we have learnt about middleware −

![middlewares](https://www.tutorialspoint.com/expressjs/images/middleware_desc.jpg)

## Third Party Middleware

A list of Third party middleware for Express is available here. Following are some of the most commonly used middleware; we will also learn how to use/mount these −

### body-parser

This is used to parse the body of requests which have payloads attached to them. To mount body parser, we need to install it using <code> npm install --save body-parser </code> and to mount it, include the following lines in your index.js −

```javascript
var bodyParser = require("body-parser");

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());
```

### cookie-parser

It parses Cookie header and populate req.cookies with an object keyed by cookie names. To mount cookie parser, we need to install it using <code> npm install --save cookie-parser </code> and to mount it, include the following lines in your index.js −

```javascript
var cookieParser = require("cookie-parser");
app.use(cookieParser());
```

### express-session

It creates a session middleware with the given options. We will discuss its usage in the Sessions section.

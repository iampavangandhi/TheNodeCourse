# Routing and URL Building

### Resources for routing: [Link](https://www.tutorialspoint.com/expressjs/expressjs_routing.htm)

### Resources for url building: [Link](https://www.tutorialspoint.com/expressjs/expressjs_url_building.htm)

## Express Routing

Web frameworks provide resources such as HTML pages, scripts, images, etc. at different routes.
The following function is used to define routes in an Express application −

### **app.method(path, handler)**

This METHOD can be applied to any one of the HTTP verbs – get, set, put, delete. An alternate method also exists, which executes independent of the request type.

Path is the route at which the request will run.

Handler is a callback function that executes when a matching request type is found on the relevant route. For example,

```javascript
var express = require("express");
var app = express();

app.get("/hello", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000);
```

If we run our application and go to localhost:3000/hello, the server receives a get request at route "/hello", our Express app executes the callback function attached to this route and sends "Hello World!" as the response.

A special method, all, is provided by Express to handle all types of http methods at a particular route using the same function.

## Routers

Defining routes like above is very tedious to maintain. To separate the routes from our main index.js file, we will use Express.Router. Create a new file called things.js and type the following in it.

📁 Let's try to make a express router. You can see code in Code Folder. **Here's the [link](https://github.com/iampavangandhi/TheNodeCourse/tree/master/03%20Expressjs/Topic3/Code/Router)**

You can run it by doing -

```
npm install

node server.js
```

You can see the output at - http://localhost:3000/example

## URL Building

We can now define routes, but those are static or fixed. To use the dynamic routes, we SHOULD provide different types of routes. Using dynamic routes allows us to pass parameters and process based on them.

Here is an example of a dynamic route −

```javascript
var express = require("express");
var app = express();

app.get("/things/:name/:id", function (req, res) {
  res.send("id: " + req.params.id + " and name: " + req.params.name);
});
app.listen(3000);

//input -  http://localhost:3000/things/something/12345/

//output - id: 12345 and name: something
```

## Pattern Matched Routes

You can also use regex to restrict URL parameter matching. Let us assume you need the id to be a 5-digit long number. You can use the following route definition −

📁 You can see code in Code Folder. **Here's the [link](https://github.com/iampavangandhi/TheNodeCourse/tree/master/03%20Expressjs/Topic3/Code/URL)**

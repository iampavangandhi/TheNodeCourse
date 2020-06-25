# Expressjs Overview

## Expressjs Website: [Here](https://expressjs.com/)

## Expressjs Docs: [Here](https://expressjs.com/en/api.html)

### What is Expressjs

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation.

### Installation

```javascript
npm install --save express
```

### Why use Express

- Ultra fast I/O
- Asynchronous and single threaded
- MVC like structure
- Robust API makes routing easy

### Hello World

```javascript
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.listen(3000);
```

```javascript
node server.js
```

### 📁 Sample Code: [Here](https://github.com/iampavangandhi/TheNodeCourse/tree/master/03%20Expressjs/Topic1/Code)

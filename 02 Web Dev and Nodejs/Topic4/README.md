# Topic 4

### Nodejs Official Website: [Nodejs.org](https://nodejs.org/en/docs/)

### Youtube Resources: [Detailed](https://youtu.be/fBNz5xF-Kx4) and [Brief](https://youtu.be/zQRrXTSkvfw)

## Getting Started with Nodejs

### Reference for Topic 4 is taken from [W3School/Nodejs](https://www.w3schools.com/nodejs/)

Once we have installed Node.js, let's build our first web server.
Make a new file server.js and write the following code in it.

```javascript
/*server.js*/

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, function () {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});
```

### Understanding Code

As we need **http** to create an http server we use **require('http')** and pass it to a variable named **http**.

```javascript
const http = require("http");
```

We also need to defined hostname and port number, here we use **localHost** i.e **127.0.0.1** and **port** number **3000** and assign this to the variables **hostname** and **port**, respectively.

```javascript
const hostname = "127.0.0.1";
const port = 3000;
```

Next we create the http server using the createServer method.

```javascript
const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});
```

This created the server as well as a response having statusCode: 200, Content-Type header of plain text and and ends with the string Hello World. This is the response that the server can send to browser.
_the function has two parameters **req** and **res** which is the **request** from and **response** to the server, respectively._

We created the server, now we just have to assign it a hostname and port number.

```javascript
server.listen(port, hostname, function () {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});
```

Now run **server.js** file in terminal using command **node server**<br>
Here, the server listens to localhost on port 3000 and prints "Server running at http://127.0.0.1:3000/" in command prompt.<br>
Open a browser and enter url _http://127.0.0.1:3000/_. The browser will display **Hello World** message on the screen.

- To understand how _require()_ works visit this [link](https://codeburst.io/all-about-core-nodejs-part-1-b9f4b0a83278)

## Node.js Modules

- Consider modules to be the same as JavaScript libraries.
- A set of functions you want to include in your application.
- Node.js has a set of built-in modules which you can use without any further installation.
- Modules are reusable functionality.

### Importing modules

To import a module we use the require() function in node. Require function is globally available.

```javascript
var http = require("http");
```

Now your application has access to the HTTP module, and is able to create a server.<br>

Let’s see some of the features of modules in the examples below. Make global.js file and add the following code.

```javascript
var path = require("path");
console.log(
  `Full path: ${__filename} and filename is ${path.basename(__filename)}`
);
```

Now run command- **node global** and you will see output as full path of the global.js file.<br>
The **path** module provides us some methods to work with **files/folders**. The **basename** method returns the filename from the complete path.
**\_\_filename** is a variable that is available in all node file and it refers the **complete path of the current file**.

### Create Your Own Modules

One can create their own modules and use in their applications. <br>
Let's try to make one. <br>
Make a file, mymodule.js and add the follwing code in it.

```javascript
exports.myDateTime = function () {
  return Date();
};
```

Use the **exports** keyword to make properties and methods available outside the module file. <br>]
Now let's include this module in our files.
Open server.js file and include following code in it.

```javascript
const http = require("http");
var dt = require("./mymodule"); //newline

const hostname = "127.0.0.1";
const port = 3000;

//create a server object:
const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("The date and time are currently: " + dt.myDateTime()); //new line //write a response to the client
  res.end("Hello World\n"); //end the response
});

server.listen(port, hostname, function () {
  console.log("Server running at http://" + hostname + ":" + port + "/");
}); //the server object listens on port 3000
```

Now run server using node in command line and see the output.

## Built-in Http Module

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
We have used the createServer() method to create an HTTP server (in server.js file) <br>
The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 3000.<br>

### Read the Query String

- The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
- This object has a property called "url" which holds the part of the url that comes after the domain name:

Now make a new file httpmodule.js and add the following code:

```javascript
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(req.url);
  res.end();
});

server.listen(port, hostname, function () {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});
```

Now run this file using command **node httpmodule** and try to run these urls http://localhost:3000/uplift and http://localhost:3000/program.

## File System Module

The Node.js file system module allows you to work with the file system on your computer.

```javascript
var fs = require("fs");
```

Common use for the File System module:

- Read files
- Create files
- Update files
- Delete files
- Rename files

### Read Files

The fs.readFile() method is used to read files on your computer.

Assume we have the following HTML file (demofile.html):

```html
<html>
  <body>
    <h1>My Header</h1>
    <p>My paragraph.</p>
  </body>
</html>
```

Create a readfile.js file that reads the HTML file, and return the content:

```javascript
const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {

 fs.readFile('demofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});
```

Run the above file and see the result.

### Create Files

The File System module has methods for creating new files:

- fs.appendFile()
- fs.open()
- fs.writeFile()

The **fs.appendFile()** method appends specified content to a file. If the file does not exist, the file will be created:
Create a new file using the appendFile() method:

```javascript
var fs = require("fs");

fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
```

The **fs.open()** method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

Create a new, empty file using the open() method:

```javascript
var fs = require("fs");

fs.open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});
```

The **fs.writeFile()** method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

Create a new file using the writeFile() method:

```javascript
var fs = require("fs");

fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
```

### Update Files

The File System module has methods for updating files:

- fs.appendFile()
- fs.writeFile()

The **fs.appendFile()** method appends the specified content at the end of the specified file:<br>
Append "This is my text." to the end of the file "mynewfile1.txt":

```javascript
var fs = require("fs");

fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
```

The **fs.writeFile()** method replaces the specified file and content:<br>
Replace the content of the file "mynewfile3.txt":

```javascript
var fs = require("fs");

fs.writeFile("mynewfile3.txt", "This is my text", function (err) {
  if (err) throw err;
  console.log("Replaced!");
});
```

### Delete Files

To delete a file with the File System module, use the **fs.unlink()** method.<br>
The **fs.unlink()** method deletes the specified file:

Delete "mynewfile2.txt":

```javascript
var fs = require("fs");

fs.unlink("mynewfile2.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});
```

### Rename Files

To rename a file with the File System module, use the **fs.rename()** method. <br>
The **fs.rename()** method renames the specified file:

Rename "mynewfile1.txt" to "myrenamedfile.txt":

```javascript
var fs = require("fs");

fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
```

## URL Module

The URL module splits up a web address into readable parts.
Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
For Example-

```javascript
var url = require("url");
var adr = "http://localhost:8080/default.htm?year=2017&month=february";
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
```

### Node.js File Server

Create two html files and save them in the same folder as your node.js files.
summer.html

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Summer</h1>
    <p>I love the sun!</p>
  </body>
</html>
```

winter.html

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Winter</h1>
    <p>I love the snow!</p>
  </body>
</html>
```

Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

fileserver.js:

```javascript
var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
```

## Events in Node.js

Every action on a computer is an event. Like when a connection is made or a file is opened.
Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

Example

```javascript
var fs = require("fs");
var rs = fs.createReadStream("./demofile.txt");
rs.on("open", function () {
  console.log("The file is open");
});
```

### Events Module

Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:

```javascript
var events = require("events");
var eventEmitter = new events.EventEmitter();
```

### The EventEmitter Object

You can assign event handlers to your own events with the EventEmitter object.
In the example below we have created a function that will be executed when a "scream" event is fired.
To fire an event, use the emit() method.

Example

```javascript
var events = require("events");
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log("I hear a scream!");
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream");
```

## Exercise

### Try all these in your local system for the better understanding of nodejs. After all this you can try the Self-Evaluating Assignment.

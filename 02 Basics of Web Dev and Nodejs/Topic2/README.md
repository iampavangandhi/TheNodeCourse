# Topic 2

## Basics of Nodejs and Installation

### Nodejs Installation

- [Download Link](https://nodejs.org/en/download/): (Install The LTS One)
- [Youtube Tutorial](https://www.youtube.com/watch?v=JINE4D0Syqw)

### What is Nodejs?

- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
- Node.js is free
- Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
- Node.js uses JavaScript on the server

Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

### Why Node?

**Node “uses an event-driven, non-blocking I/O model.”**
- In practice, this means that Node is built well to handle asynchronous JavaScript code to perform many asynchronous activities such as reading and writing to the file system, handling connections to database servers, or handling requests as a web server.
- To handle asynchronous code, Node uses a callback-based system. 

##

After installing node try to do this-<br>
Save the following in _script.js_ file
```javascript
console.log('I am a Node program');
```
Running the terminal command **node script.js** in the same folder as _script.js_ will start **Node**, print **I am a Node program** to the terminal window, and exit, as the script file has finished execution.

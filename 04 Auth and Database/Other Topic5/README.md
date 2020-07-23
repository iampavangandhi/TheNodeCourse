# Debugging and Testing

## Resource: [link](https://nodejs.org/api/debugger.html)
### Console.log:
One of the most common form of debugging is the use of console.log statement. If you are not good at debugging you can use this console.log statement in your application to find low potential errors. It just simply prints on the screen. Nothing is like setting breakpoints or typical debugger stuff. It will console the message on your browser if you write it in the client’s side code. For the server side it will console the message on the editor.

### Debugging with Node inspector:
Node inspector is a powerful JavaScript debugger for NodeJS applciations that uses the blink developer tools. It has many advanced features.
- Navigate in your source files
- Set breakpoints (and specify trigger conditions)
- Step over, step in, step out, resume (continue)
- Inspect scopes, variables, object properties
- Hover your mouse over an expression in your source to display its value in a tooltip
- Edit variables and object properties
- Continue to location
- Break on exceptions
- Disable/enable all breakpoints
- CPU and HEAP profiling
- Network client requests inspection
- Console output inspection


To install node inspector type <br />
<code>$ npm install –g node-inspector.</code>


To start debugging type the following command<br />
<code>$ node-debug app.js</code>

### Here are some articles, do read them:

1. [Debugging and Testing of a Node Application](https://www.geeksforgeeks.org/debugging-and-testing-of-a-node-application/)
2. [Top 10 Node.js Debugging Tips to Debug Like a Pro](https://stackify.com/node-js-debugging-tips/)

# RESTful APIs

### Youtube Resource: [Link](https://youtu.be/vjf774RKrLc)

### REST Resources: [Link](https://www.tutorialspoint.com/expressjs/expressjs_restful_apis.htm)

### REST API Architectural Constraints: [Link](https://www.geeksforgeeks.org/rest-api-architectural-constraints/)

## REST (REST API Architectural Constraints)

**REST** stands for **RE**presentational **S**tate **T**ransfer and API stands for Application Program Interface. REST is a software architectural style that defines the set of rules to be used for creating web services. Web services which follow the REST architectural style are known as RESTful web services. It allows requesting systems to access and manipulate web resources by using a uniform and predefined set of rules. Interaction in REST based systems happen through Internet’s Hypertext Transfer Protocol (HTTP).

A Restful system consists of a:

- client who requests for the resources.
- server who has the resources.

### Which HTTP method should we use?

When constructing a REST API each HTTP method corresponds to an action against a resource served by the API.

- GET — retrieve a particular resource’s object or list all objects
- POST — create a new resource’s object
- PATCH — make a partial update to a particular resource’s object
- PUT — completely overwrite a particular resource’s object
- DELETE — remove a particular resource’s object

### HTTP status codes

There are a multitude of HTTP status codes, here is just a few of the pertinent ones (which we will be using):

- 200 — OK, The request was successful
- 201 — CREATED, A new resource object was successfully created
- 404 — NOT FOUND, The requested resource could not be found
- 400 — BAD REQUEST, The request was malformed or invalid
- 500 — INTERNAL SERVER ERROR, Unknown server error has occurred

## REST API Movies Example

Let us now create this API in Express. We will be using JSON as our transport data format as it is easy to work with in JavaScript and has other benefits. We will be using **[POSTMAN](https://www.postman.com/)** for API Testing so Download and Install **[POSTMAN](https://www.postman.com/)** in your system.

## POSTMAN (\*Mandatory to learn)

Postman is one of the most popular software testing tools which is used for API testing. With the help of this tool, developers can easily create, test, share, and document APIs.

### Introduction to Postman

- Postman is a standalone software testing API (Application Programming Interface) platform to build, test, design, modify, and document APIs. It is a simple Graphic User Interface for sending and viewing HTTP requests and responses.
- While using Postman, for testing purposes, one doesn't need to write any HTTP client network code. Instead, we build test suites called collections and let Postman interact with the API.
- In this tool, nearly any functionality that any developer may need is embedded. This tool has the ability to make various types of HTTP requests like GET, POST, PUT, PATCH, and convert the API to code for languages like JavaScript and Python.

### Tutorials and Crash Course

- [Postman Tutorial](https://www.javatpoint.com/postman)
- [Crash Course](https://youtu.be/Iq7eh6DhN6M)

## Code Example (Movies Example)

📁 You can see code in Code Folder. **Here's the [link](https://github.com/iampavangandhi/TheNodeCourse/tree/master/03%20Expressjs/Topic7/Code)**

Run it by doing

```
npm install

npm server.js
```

Then Test it using **[POSTMAN](https://www.postman.com/)**.

### \*After completing the Topic 7 read the Important Reads Listed in the Expressjs Page: [Repo](https://github.com/iampavangandhi/TheNodeCourse/tree/master/03%20Expressjs) and [Web](https://iampavangandhi.github.io/TheNodeCourse/03%20Expressjs/).

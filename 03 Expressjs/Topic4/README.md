# HTTP Methods (GET, POST, PUT, DELETE)

### Youtube Resourse: [Must Watch](https://www.youtube.com/watch?v=guYMSP7JVTA)

### Resource: [link](https://scotch.io/courses/build-a-restful-nodejs-api/post-put-delete-requests)

## HTTP Methods

<<<<<<< HEAD
**HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.**
Here, are the most common methods -
| S.No. | Method | Description |
|------|---| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | GET | The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect.\*\* |
| 2 | POST | The POST method requests that the server accept the data enclosed in the request as a new object/entity of the resource identified by the URI. |
| 3 | PUT | The PUT method requests that the server accept the data enclosed in the request as a modification to existing object identified by the URI. If it does not exist then the PUT method should create one. |
| 4 | DELETE | The DELETE method requests that the server delete the specified resource. |

### To put it in short...

Create - POST
Read - GET
Update - PUT
Delete - DELETE
=======
**HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.** <br />
Here, are the most common methods - <br />
| S.No | Method & Description                                                                                                                                                                                                 |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | **GET**<br /> The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect.<br/>                                                    |
| 2    | **POST**<br/> The POST method requests that the server accept the data enclosed in the request as a new object/entity of the resource identified by the URI.<br />                                                         |
| 3    | **PUT**<br/> The PUT method requests that the server accept the data enclosed in the request as a modification to existing object identified by the URI. If it does not exist then the PUT method should create one.<br/> |
| 4    | **DELETE**<br /> The DELETE method requests that the server delete the specified resource<br/>                                                                                                                            |

### To put it in short...
Create - Post<br />
Read - Get<br />
Update - Put<br />
Delete - Delete<br />
>>>>>>> 6d2a04aebe1cb74d6713551d8804c9d09dde48c2

Now consider we are making a student based application then using following statements we will perform different applications -

```javascript
// Create a new Student
app.post("/api/students", students.create);

// Retrieve all Customer
app.get("/api/students", students.findAll);

// Retrieve a single Student by Id
app.get("/api/students/:id", students.findOne);

// Update a Student with Id
app.put("/api/student/:id", student.update);

// Delete a Student with Id
app.delete("/api/students/:id", student.delete);
```

### Let's try to build a TODO list application

📁 You can see code in Code Folder. **Here's the [link](https://github.com/iampavangandhi/TheNodeCourse/tree/master/03%20Expressjs/Topic4/Code)**

You can run it by doing -

```javascript
npm install

node index.js
```

You can see the output at - http://localhost:3000/

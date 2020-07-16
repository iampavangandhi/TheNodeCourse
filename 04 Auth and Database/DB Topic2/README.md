# MongoDB Setup using Mongoose

## Resource: [link](https://mongoosejs.com/docs/connections.html)

## Youtube Resource: [link]()

### Setup
To connect MongoDB to your Express application, we will use an ORM to convert information from the database to a JavaScript application without SQL statements. ORM is short for Object Related Mapping, a technique that programmers use to convert data among incompatible types.

For this application, we'll use **Mongoose** as **ORM**.<br />
Mongoose provides a comfortable API to work with MongoDB databases from setup to execution.

#### Installation
```
npm install mongoose --save
```

### Connecting Mongoose to MongoDB

In our particular use case our project folder is called demo and our main server file is called app.js so please follow along as closely as but keep in mind if your path and filenames are different you’ll want to adapt the code to your specific situation.

To connect Mongoose to our MongoDB service in app.js we will need to call the connect() function and give it the URI to our MongoDB service that includes the port number and our database name. The default port number for MongoDB is 27017 unless you change it. So for our example we connect to a demodb using this line of code:

File: /demo/app.js
```
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demodb');
Now we want a variable that holds this a connection to our database and we can do that like this:

var db = mongoose.connection;
```
Of course the variable db can by called anything you want but db is succinct and make sense.

#### Verify the Connection
To test if the connection is successful there are a couple callback functions that you can use, on() and once().

Let’s see how that would look in code:
```
db.on('error', console.error.bind(console, 'connectionasdf error:'));
 
db.once('open', function() {
  console.log("Successfully connected to MongoDB!");
});
```
When we run this the log message will run if we are successfully connected. Let’s run it and see:
```
$ node app.js
Successfully connected to MongoDB!
```


#### Just The Code
If you are already familiar with the all the concepts and just need a quick reminder of the code, here is all the code we used in this tutorial:
```
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demodb');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));
 
db.once('open', function() {
  console.log("Successfully connected to MongoDB!");
});
```


# Using JWT With Node.js


## Youtube Resource: [link](https://www.youtube.com/watch?v=7nafaH9SddU)

## Resource: [link](https://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api)

## A quick review about JWT
JSON Web Token (JWT) is an open standard that defines a compact and self-contained way of securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

Authorization is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single sign-on is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

### Components of JWT
- Header
- Payload
- Signature

Therefore, a JWT typically looks like the following-
```
xxxxx.yyyyy.zzzzz
```
The first part of a JWT is an encoded string representation of a simple JavaScript object which describes the token along with the hashing algorithm used. The example below illustrates a JWT using HMAC SHA-256.

```
{ 
  "typ" : "JWT",
  "alg" : "HS256" 
}
```
After encoding, the object becomes this string:

```
eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9
```
The second part of the JWT forms the core of the token. It too represents a JavaScript object, which contains a few pieces of information. Some of these fields are required, and some are optional. An example, taken from the draft specification, is shown below.

```
{
  "iss": "joe",
  "exp": 1300819380,
  "http://example.com/is_root": true
}
```
This is called a JWT Claims Set. For the purposes of this article, we’re going to ignore the third parameter. The <code>iss</code> property is short for <code>issuer</code>, and specifies the person or entity making the request. Typically, this would be the user accessing the API. The <code>exp</code> field, short for <code>expires</code>, is used to limit the lifetime of the token. Once encoded, the JSON token looks like this:

```
eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ
```

The third, and final, part of the JWT is a signature generated based on the header (part one) and the body (part two). The signature for our example JWT is shown below.

```
dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
```
The resulting complete JWT looks like this:
```
eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ.dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
```

There are a number of additional, optional properties supported in the specification. Among them are <code>iat</code> representing the time at which the token was issued, <code>nbf</code> (Not Before) to indicate the token should not be accepted before a certain time, and <code>aud</code> (audience) to indicate the recipients the token is intended for.


## Implementation in Node.js
Now that we’ve seen how JWT based authentication works, let’s implement it using Node.

### Creating the HTTP server
Let’s start by initializing the HTTP server with the required routes in the <code>index.js</code> file. We’ve used express as the server framework:

```
const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const { signIn, welcome, refresh } = require("./handlers")

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())

app.post("/signin", signIn)
app.get("/welcome", welcome)
app.post("/refresh", refresh)

app.listen(8000)
```
We can now define the <code>signIn</code> and <code>welcome</code> routes.

### Handling user sign in
The <code>/signin</code> route will take the users credentials and log them in. For simplification, we’re storing the users information as an in-memory map in our code:
```
const users = {
	user1: "password1",
	user2: "password2",
}
```
So for now, there are only two valid users in our application: <code>user1</code>, and <code>user2</code>. Next, we can write the <code>signIn</code> HTTP handler in a new file <code>handlers.js</code>. For this example we are using the jsonwebtoken library to help us create and verify JWT tokens.


- See code in [Code Folder](https://github.com/iampavangandhi/TheNodeCourse/tree/master/04%20Auth%20and%20Database/Auth%20Topic2/code/jwt-nodejs-example)


If a user logs in with the correct credentials, this handler will then set a cookie on the client side with the JWT value. Once a cookie is set on a client, it is sent along with every request henceforth. Now we can write our welcome handler to handle user specific information.

### Handling post authentication routes
Now that all logged in clients have session information stored on their end as cookies, we can use it to:

- Authenticate subsequent user requests
- Get information about the user making the request
Let’s write our <code>welcome</code> handler in <code>handlers.js</code> to do just that:

- 📁 See handlers.js file in [Code Folder](https://github.com/iampavangandhi/TheNodeCourse/tree/master/04%20Auth%20and%20Database/Auth%20Topic2/code/jwt-nodejs-example)

### Renewing your token
In this example, we have set a short expiry time of five minutes. We should not expect the user to login every five minutes if their token expires. To solve this, we will create another <code>/refresh</code> route that takes the previous token (which is still valid), and returns a new token with a renewed expiry time.

To minimize misuse of a JWT, the expiry time is usually kept in the order of a few minutes. Typically the client application would refresh the token in the background.

- 📁 See code in [Code Folder](https://github.com/iampavangandhi/TheNodeCourse/tree/master/04%20Auth%20and%20Database/Auth%20Topic2/code/jwt-nodejs-example)


We’ll need to export the handlers at the end of the file:
```
module.exports = {
	signIn,
	welcome,
	refresh,
}
```
### Running our application
To run this application, run the command:
```
node ./index
```
Now, using any HTTP client with support for cookies (like Postman, or your web browser) make a sign-in request with the appropriate credentials:
```
POST http://localhost:8000/signin

{"username":"user1","password":"password1"}
```
You can now try hitting the welcome route from the same client to get the welcome message:
```dark
GET http://localhost:8000/welcome
```
Hit the refresh route, and then inspect the clients cookies to see the new value of the <code>token</code> cookie:
```
POST http://localhost:8000/refresh
```

- 📁 For code look [here](https://github.com/iampavangandhi/TheNodeCourse/tree/master/04%20Auth%20and%20Database/Auth%20Topic2/code/jwt-nodejs-example)

Few more links to understand this concept and its implementation: [link1](https://medium.com/better-programming/authentication-and-authorization-using-jwt-with-node-js-4099b2e6ca1f) & [link2](https://flaviocopes.com/jwt/)  

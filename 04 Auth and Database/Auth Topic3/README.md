# Intro to Passport Authentication

## Youtube Resource: [link](https://www.youtube.com/watch?v=-RCnNyD0L-s) and [link](https://www.youtube.com/watch?v=6FOq4cUdH8k) 

## Resource: [link](http://www.passportjs.org/docs/authenticate/)

### What is Passport.js?
- Passport.js is a simple, unobtrusive Node.js authentication middleware for Node.js.
- Passport.js can be dropped into any Express.js-based web application.
- Passport.js is an authentication middleware for Node.js
- Passport is an authentication middleware for Node.js which we are going to use for session management.

### Let's Start
Here, we will create application which will do following things only:
- Register new user.
- One email address (username) can be registered only once.
- Login user (If they are matching, passport.js sends a Set-Cookie header that will be used to authenticate other pages).
- Logout user (Expire Session Cookies).

**Project Structure will be like this:**
```
+ server
 + user(there can be multilple other modules like user)
    + user.server.controller.js
    + user.server.model.js
    + user.server.route.js
 + config
    + config.js
    + db.js
 + routes.js
+ server.js
+ package.json
+ README.md
```

**1. Setting up Server using Express Framework.**

- 📁 See code in [Code Folder](https://github.com/iampavangandhi/TheNodeCourse/tree/master/04%20Auth%20and%20Database/Auth%20Topic3/Code)


First of all, we required all the module dependencies. After that we used middleware instances body-parser, cookie-parser and express-session. We used Mongodb to store database. You can see we loaded db file, so our connection will established, when we will start our server.


**2. Setting up Database connection using Mongoose.**
```
const Mongoose = require('mongoose');
const config = require('./config');
Mongoose.connect(config.db);
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});
exports.db = db;
```

**3. Setting up Passport**
```
/*!
 * Module dependencies.
 */
const User = require('../user/user.server.model').User;
const local = require('./passport/local');
/**
 * Expose
 */
module.exports = function (passport) {
  // serialize sessions
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })
  passport.deserializeUser(function(id, done) {
    User.findOne({ _id: id }, function (err, user) {
      done(err, user)
    })
  })
  // use these strategies
  passport.use(local);
};
```

#### What is passport serializer and deserializer? 
- Serialize function determine what data from the user object should be stored in the session. The result of the serializeUser method is attached to the session as req.session.passport.user = {} here for instance.
- In deserialize function you provide in first argument of deserialize function that same key of user object that was given to done function in serialize call. So your whole object is retrieved with help of that key. That key here is id(key can be any key of the user object ie name,email etc). In deserialize function that key is matched with in database or any data resource. <br />
The fetched object is attached to request object as req.user. We used passport-local for local authentication using email(username) and password.
```
/**
 * Module dependencies.
 */
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../user/user.server.model').User;
/**
 * Expose
 */
module.exports = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    var options = {
      criteria: { email: email },
      select: 'name email hashed_password salt'
    };
    User.load(options, function (err, user) {
      if (err) return done(err)
      if (!user) {
        return done(null, false, { message: 'Unknown user' });
      }
      if (!user.authenticate(password)) {
        return done(null, false, { message: 'Invalid password' });
      }
      return done(null, user);
    });
  }
);
```
Once the load returns with our user object the only thing left is to compare the Unknown User and password to see if there is a match. If it is a match, we let the user in (by returning the user to passport — return done(null, user)), if not we return an unauthorized error (by returning nothing to passport — return done(null, false, {message: ”})). How route endpoint to use passport authentication.
```
app.post('/login', passport.authenticate('local', {}), User.login);
```

- 📁 See complete code in [here](https://github.com/iampavangandhi/TheNodeCourse/tree/master/04%20Auth%20and%20Database/Auth%20Topic3/Code)

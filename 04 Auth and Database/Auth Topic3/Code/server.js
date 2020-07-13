
/**
 * Module dependencies
 */
const express = require('express')
const passport = require('passport')
const db = require('./server/config/db')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 3000

//use cookie parser to store data
app.use(cookieParser());
app.use(expressSession({secret:'somesecrettokenhere'}));
//load client folder
//bodyparser to use for request and respnse and set limit in request body data
app.use(bodyParser.urlencoded({ limit: '52428800', extended: true }));
app.use(bodyParser.json({limit: '52428800'}));

// Bootstrap passport config
require('./server/config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

// Bootstrap routes
require('./server/config/routes')(app, passport);

app.listen(port);
console.log('Express app started on port ' + port);

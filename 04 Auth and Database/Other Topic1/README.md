# Sessions and Cookies

## Resource: [link](https://www.geeksforgeeks.org/http-cookies-in-node-js/#:~:text=values%20in%20JavaScript-,HTTP%20Cookies%20in%20Node.,features%20in%20your%20web%20app.)

Http is a stateless protocol.That means that when we load a page in our browser, and then navigate to another page of same website the server has no means of knowing that these requests have originated from same browser or client.
Ok,but then how are we able to login to a website or how does a e-commerce website remembers my cart or in other words how state is managed between client and server?<br />

To know *which browser is this?* 
- In the browser state is stored in **Cookies** 
- In the server state is stored in **Sessions**

### COOKIES
Cookie is data sent from a website and stored on user’s computer by the user’s browser.Cookie unfortunately have gotten a bad name thanks to the malicious attacks (e.g XSS ) done using cookie.But cookies are essential for modern day web browsing.Putting it in simpler terms,server sends a bit of information,browser stores it for configurable period of time.It’s upto to the server what that bit of information is,often it is a unique ID that identifies a browser,hence help in creating illusion of state.

Different browsers have rules and ways to store cookie but the underlying principles remain the same.Google chrome uses an SQLite database to save cookies.To see the cookies of website open the chrome developer tools (keyboard shortcut Shift+Ctrl+I),select the application tab,from the storage menu select cookie and bam you can see all the cookies this site uses.

Cookies are not magically stored and deleted from browser,when the server wishes to store the cookie,it sends a http header Set-Cookie which contains key-value pairs.

### SESSIONS
Sessions are a simple way to store data for individuals on server side.There are two ways to implement sessions:
1. Store everything on the cookie
2. Store a unique ID in the cookie and rest on the server.

Second is the recommended way to implement sessions.

### Cookies-parser 
**Cookies-parser** is npm module which is used to parse the cookie header and populate req.cookies with an object keyed by cookie names.<br />
**Express-session** is also an npm module using which we can control how sessions are stored,how sessionID are generated,where sessions are stored(by default Memory Store),for how long cookies should be stored before they are flushed and many more.<br />

### Let’s see this in action.
Execute the following command in your terminal to start the project and install necessary modules.
```
npm init 
npm install --save express express-session cookie-parser body-parser
```

First we include the various modules which we are going to use.<br />
Then we called the express to create our app and lastly we tell express which port to run on.
```
var express=require('express');
var cookieparser=require('cookie-parser');
var bodyparser=require('body-parser');
var session=require('express-session');
var app=express();
app.listen(3000,(err)=>{
if(err)
{
 console.log(err);
}
console.log('Listening on localhost:3000')
});
```
Add the cookie-parser and express-session middleware to our express app.Order of writing the middleware is important so make sure to add cookieparser prior to session.
```
app.use(cookieparser());
app.use(session({
secret:'secret',
resave:false,
saveUninitialized:false,
cookie:{
maxAge:10000
}}));
```
*secret* is used to sign the cookies.*’resave’* forces the session to be saved back to the session store, even if the session was never modified during the request.*’maxAge’* tell for how long browser will hold the cookie(value in millisecond),default is when the browser window will terminate then the cookies will be cleared.
```
app.get('/',(req,res,next){
if(!req.session.content){
req.session.count=1;
}
else{
req.session.content+=1;
res.send(JSON.stringify(req.cookies["connect.sid"])+<br>"+JSON.stringify(req.sessionID)+"<br>"+JSON.stringify(req.session.count));
}
});
```
After adding this simple route run the following command to start your server(server.js is name of your file)
```
node server.js
```
After that hit “ localhost:3000” on your browser in multiple tab.You will see count value incrementing and after some time( precisely after 10 second)it’s again starting from 1.
```
FIRST HIT:
undefined
"4dqB6un4DynpjKIeSdyRkt3Dge2PMlnm"
1
SECOND HIT:
"s:4dqB6un4DynpjKIeSdyRkt3Dge2PMlnm.DxNXuHcZpxN/cJbwF7mZn+dBubDu1CPW9x/a/13s2Eg"
"4dqB6un4DynpjKIeSdyRkt3Dge2PMlnm"
2
THIRD HIT:
  "s:4dqB6un4DynpjKIeSdyRkt3Dge2PMlnm.DxNXuHcZpxN/cJbwF7mZn+dBubDu1CPW9x/a/13s2Eg"
"4dqB6un4DynpjKIeSdyRkt3Dge2PMlnm"
3
FOURTH HIT (AFTER 10s ):
 undefined
"Y0vuCWMm8Og-vscO8Zidr1GN7XdofhYu"
1
```
This happens because this is how we have have configured our session and cookie.When we first hit the route there was no cookie stored hence undefined,after first hit browser stores the cookie and in subsequent request sends the stored cookie along with request object.The server extract the received cookie,find the associated session from session store and then update the count value.But since maxAge of cookie is defined to be 10 sec,hence after 10 sec all the data gets cleared.

Where is the session data stored? It depends on how you set up the express-session module.

It can store session data in
- memory, not meant for production
- a database like MySQL or Mongo
- a memory cache like Redis or Memcached

By default it is memory ,when nothing is specified.

### CONCLUSION
- Cookies take the stateless web and allow servers to store small “breadcrumbs” in each browser.
- Session IDs are large random numbers stored in a cookie and used to maintain a session on the server for each of the browsers connecting to the server
- Server software stores sessions *store* — each time a request comes back in, the right session is retrieved based on the cookie

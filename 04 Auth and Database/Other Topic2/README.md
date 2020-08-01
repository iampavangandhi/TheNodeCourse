# Socket.IO 

### Resource: [link](https://socket.io/docs/)

## Socket.io

Socket.io enables real-time bidirectional event-based communication.

- **It consists of:**
  - a Node.js server 
  - a Javascript client library for the browser (or a Node.js client)
  
### Few Features

- Reliability
Connections are established even in the presence of:
- proxies and load balancers.
- personal firewall and antivirus software.
For this purpose, it relies on Engine.IO, which first establishes a long-polling connection, then tries to upgrade to better transports that are "tested" on the side, like WebSocket.

- Auto-reconnection support
Unless instructed otherwise a disconnected client will try to reconnect forever, until the server is available again.

- Disconnection detection
A heartbeat mechanism is implemented at the Engine.IO level, allowing both the server and the client to know when the other one is not responding anymore.

That functionality is achieved with timers set on both the server and the client, with timeout values (the pingInterval and pingTimeout parameters) shared during the connection handshake. Those timers require any subsequent client calls to be directed to the same server, hence the sticky-session requirement when using multiples nodes.

- Binary support
Any serializable data structures can be emitted, including:
- ArrayBuffer and Blob in the browser
- ArrayBuffer and Buffer in Node.js

### Installtion

```sh
npm i socket.io
```

### How to use

- The following example attaches socket.io to a plain Node.JS HTTP server listening on port 3000.

```javascript
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000);
```

- Standalone

```javascript
const io = require('socket.io')();
io.on('connection', client => { ... });
io.listen(3000);
```

- In conjunction with Express
Starting with 3.0, express applications have become request handler functions that you pass to http or http Server instances. You need to pass the Server to socket.io, and not the express application function. Also make sure to call .listen on the server, not the app.

```javascript
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);
```

### Learn more about **socket.io** from [here](https://www.tutorialspoint.com/socket.io/index.htm).

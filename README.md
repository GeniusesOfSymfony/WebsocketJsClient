Gos Webscoket (JS Client)
=========================

About
-----
It's Javascript client for [Gos Websocket Bundle](https://github.com/GeniusesOfSymfony/WebsocketBundle)

Development
----------

This project is very simple, just run `gulp serve` to generate distribution file.

Install
--------

```html
<script type="text/javascript" src="dist/websocket.js"></script>
```

Usage
-----

### Connection

```js
var websocket = WS.connect("ws://127.0.0.1:8080");
```

### On Connect 

```js
webSocket.on("socket/connect", function(session){
    //session is an Autobahn JS WAMP session.
    console.log("Successfully Connected!");
});
```

### On Disconnect

```js
webSocket.on("socket/disconnect", function(error){
    //error provides us with some insight into the disconnection: error.reason and error.code
    console.log("Disconnected for " + error.reason + " with code " + error.code);
});
```

### Pub/Sub

```js
webSocket.on("socket/connect", function(session){
    //the callback function in "subscribe" is called everytime an event is published in that channel.
    session.subscribe("acme/channel", function(uri, payload){
        console.log("Received message", payload.msg);
    });

    session.publish("acme/channel", "This is a message!");
});
```
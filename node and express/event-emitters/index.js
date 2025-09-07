const EventEmitter = require("events");

const myFirstEmitter = new EventEmitter();

myFirstEmitter.on("greet", (name) => {
  console.log(`hello ${name}`);
});
myFirstEmitter.emit("greet", "zaid khn");
// If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

// On the backend side, Node.js offers us the option to build a similar system using the events module.

// This module, in particular, offers the EventEmitter class, which we'll use to handle our events.
// This object exposes, among many others, the on and emit methods.

// emit is used to trigger an event
// on is used to add a callback function that's going to be executed when the event is triggered

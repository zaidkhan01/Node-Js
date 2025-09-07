const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "hello";
  }
  greet(name) {
    this.emit("greeting", `${this.greeting},${name}`);
  }
}

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on("greeting", (input) => {
  console.log(`greeting event`, input);
});
myCustomEmitter.greet("zaid khaaaan");

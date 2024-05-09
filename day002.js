import { EventEmitter } from "node:events";

const myEvent = new EventEmitter();

myEvent.on("lunchtime", (food) => console.log(`Time to eat ${food}`));

myEvent.emit("lunchtime", "🍱🍣");

import { EventEmitter } from "node:events";

const ee = new EventEmitter();

ee.on("boom", async () => {
  throw new Error("kaboom");
});

//ee.on("error", console.error);
ee[Symbol.for("nodejs.rejection")] = console.log;

ee.emit("boom");

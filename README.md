# 100-days-of-nodejs

a progressive learning journey towards nodeJS 🚀

## Below is my personal exercise to explore and practice different aspect of the NodeJS.

The main reference to this activity was the official (documentation) [https://nodejs.org/api/documentation.html]. The areas of study was based in the NodeJS Cerfication program offered by the (OpenJS organization) [https://training.linuxfoundation.org/certification/jsnad/]

### Domains & Competencies

- Buffer and Streams

* Node.js Buffer API’s
* Incremental Processing
* Transforming Data
* Connecting Streams

- Control flow

* Managing asynchronous operations
* Control flow abstractions

- Child Processes

* Spawning or Executing child processes
* Child process configuration

- Diagnostics

* Debugging Node.js
* Basic performance analysis

- Error Handling

* Common patterns
* Handling errors in various scenarios

- Node.js CLI

* Node executable command line flags

- Events

* The event system
* Building event emitters
* Consuming event emitters

- File System

* Input/output
* Watching

- JavaScript Prerequisites

* Language fundamentals
* Scoped to core language features introduced since EcmaScript 1 and still heavily used today

- Module system

* CommonJS Module System only

- Process/Operating System

* Controlling the process
* Getting system data

- Package.json

* Package configuration
* Dependency management

- Unit Testing

* Using assertions
* Testing synchronous code
* Testing asynchronous code

## Day 001:

Create a basic web server to server an index html file.

```js

import { createServer } from "node:http";
import { promises } = from "fs";

const { readFile } = promises;
const index = await readFile(process.cwd() + "/index.html");

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(index.toString());
  res.end();
}).listen(8000);

```

## Day 002:

Create a custom event emitter.

```js
import { EventEmitter } from "node:events";

const myEvent = new EventEmitter();

myEvent.on("lunchtime", (food) => console.log(`Time to eat ${food}`));

myEvent.emit("lunchtime", "🍱🍣");
```

## Day 003: Count the number of files with `spawn`

```js
import { spawn } from 'node:child_process';

const find = spawn('find', ['.', '-type', 'f', '-maxdepth', '1']);
const wc = spawn('wc', ['-l']);
find.stdout.pipe(wc.stdin);

wc.stdout.on("data", (data) => console.log(`The number of files: ${data}`));
wc.on("exit", (code, signal) => console.log(`Child process exited: ${code} - ${signal}`);

```

## Day 004: write and read using the File System module

```js
import { promises, createWriteStream } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";

const { open } = promises;

// create n write into a file
const file = createWriteStream("tmp.txt");
file.write("hello");
file.write("\n");
file.write("world");
file.end();

await sleep(2000);

// read n output the content
const fileFromDisk = await open("tmp.txt");

for await (const line of fileFromDisk.readLines()) console.log(line);
```

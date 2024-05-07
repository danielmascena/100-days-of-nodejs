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

Create a basic web server to server an index html file

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

import { spawn } from "node:child_process";

const cpFind = spawn("find", [".", "-type", "f", "-maxdepth", "1"]);
const cpWC = spawn("wc", ["-l"]);
// count the total (only the lines) number of files in the directory
cpFind.stdout.pipe(cpWC.stdin);

cpFind.stdout.on("data", (data) =>
  console.log(`Find child process stdout ${data}`),
);

cpFind.on("exit", exitPrintFunction);

process.stdout.write("Type something:");

// type something and then: CTRL + D

cpWC.stdout.on("data", (data) =>
  console.log(`WC child process stdout ${data}`),
);

cpWC.on("exit", exitPrintFunction);

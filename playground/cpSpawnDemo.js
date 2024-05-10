import { spawn } from "node:child_process";

// the spawn don't create shell to execute, more efficient than the exec (that creates a shell)
const cpPWD = spawn("pwd");

const exitPrintFunction = (code, signal) =>
  console.log(`Child process exited with code ${code} and signal ${signal}`);

cpPWD.stdout.on("data", (data) =>
  console.log(`Child process stdout: ${data}.`),
);

cpPWD.stderr.on("data", (data) =>
  console.log(`Child process stderr: ${data}.`),
);

cpPWD.on("exit", exitPrintFunction);

const cpFind = spawn("find", [".", "-type", "f", "-maxdepth", "1"]);
const cpWC = spawn("wc", ["-l"]);
// count the total (only the lines) number of files in the directory
cpFind.stdout.pipe(cpWC.stdin);
cpFind.stdout.on("data", (data) =>
  console.log(`Find child process stdout ${data}`),
);

cpFind.on("exit", exitPrintFunction);

process.stdout.write("Type something:");
//process.stdin.pipe(cpWC.stdin);

// type something and then: CTRL + D

cpWC.stdout.on("data", (data) =>
  console.log(`WC child process stdout ${data}`),
);

cpWC.on("exit", exitPrintFunction);

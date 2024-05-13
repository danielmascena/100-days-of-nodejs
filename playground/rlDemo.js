import * as readline from "node:readline/promises";
import { stdin, stdout, stderr } from "node:process";

readline.createInterface({
  input: stdin,
  output: stdout,
});

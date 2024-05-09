import { createServer } from "node:http";
import { promises } from "fs";

const { readFile } = promises;
const index = await readFile(process.cwd() + "/index.html");

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(index.toString());
  res.end();
}).listen(8000);

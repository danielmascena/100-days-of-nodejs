import { createServer } from "node:http";
import path from "node:path";
import { promisify } from "util";
import { promises } from "fs";

const { readdir, readFile } = promises;
const { pathname } = new URL(import.meta.url);

const index = await readFile(process.cwd() + "/index.html");
createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(index.toString());
  res.end();
}).listen(8000);

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

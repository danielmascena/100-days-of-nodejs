import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);
// The exec function has one other major difference. It buffers the command’s generated output and passes
// the whole output value to a callback function (instead of using streams, which is what spawn does).
exec("find . -type f | wc -l", (err, stdout, stderr) => {
  if (err) {
    console.error(`An error occurred ${err}`);
    return;
  }
  console.log(`The number of files on the current directory is ${stdout}`);
});

// Async version
async function outputNumberOfFiles() {
  const { stdout, stderr } = await execAsync("find . -type f | wc -l");
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
}

outputNumberOfFiles();

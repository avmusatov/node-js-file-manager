import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { argv } from "node:process";

import { parseInput } from "./command/parseInput.js";
import { performOperation } from "./command/performOperation.js";
import { homedir } from "node:os";
import { Operation } from "./domains/command.js";
import {
  byeMessage,
  currentDirMessage,
  greetMessage,
  parseErrorMessage,
  runtimeErrorMessage,
} from "./domains/messages.js";

const usernameArgKey = "--username=";
const extractUsernameFromArgs = () => {
  const argSlice = argv.slice(2);
  const index = argSlice.findIndex((arg) => arg.includes(usernameArgKey));
  if (index === -1) {
    return "Anonymus";
  }
  return argSlice[index].split("=")[1];
};

const username = extractUsernameFromArgs();
let currentDir = homedir();
const printCurrentDir = () => console.log(currentDirMessage(currentDir));

console.log(greetMessage(username));
printCurrentDir();
const rl = readline.createInterface({ input, output });

rl.on("line", async (inputLine) => {
  try {
    const { operation, args } = parseInput(inputLine);
    if (operation === Operation.Exit) {
      rl.close();
    }
    const newDir = await performOperation(currentDir, operation, args);
    if (newDir !== undefined) {
      currentDir = newDir;
      printCurrentDir();
    }
  } catch (err) {
    console.log('ERROR: ', err);
    if (err.message !== parseErrorMessage) {
      return console.log(runtimeErrorMessage);
    }
    console.log(parseErrorMessage);

  }
});

rl.on("close", () => {
  console.log(byeMessage(username));
});

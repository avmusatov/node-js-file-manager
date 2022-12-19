import { homedir as osHomedir, EOL, cpus as osCpus, userInfo } from "node:os";

const endOfLine = () => {
  console.log(EOL);
};

const architecture = () => {
  console.log(process.arch);
};

const username = () => {
  console.log(userInfo().username);
};

const cpus = () => {
  console.log(osCpus());
};

const homedir = () => {
  console.log(osHomedir());
};

export { cpus, homedir, endOfLine, architecture, username };

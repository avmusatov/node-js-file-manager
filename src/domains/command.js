export const Operation = {
  Exit: ".exit",
  Up: "up",
  ChangeDir: "cd",
  ListOfFiles: "ls",
  PrintFile: "cat",
  CreateFile: "add",
  RenameFile: "rn",
  CopyFile: "cp",
  MoveFile: "mv",
  RemoveFile: "rm",
  OS: "os",
  Hash: "hash",
  Compress: "compress",
  Decompress: "decompress",
};

export const OsArg = {
  Eol: "--EOL",
  Cpus: "--cpus",
  Homedir: "--homedir",
  Username: "--username",
  Architecture: "--architecture"
}

const isEmpty = (args) => args === undefined || args.length === 0;
const isValidFilename = (name) => /^[\w,\s-]+\.[A-Za-z]{1,}$/.test(name);
const isValidOsArg = (arg) =>
  Object.values(OsArg).includes(
    arg
  );

export const isValidOperation = (operation) =>
  Object.values(Operation).some(
    (existingOperation) => existingOperation === operation
  );

export const isValidArgs = {
  [Operation.Exit]: isEmpty,

  [Operation.Up]: isEmpty,

  [Operation.ChangeDir]: (args) => args.length === 1,

  [Operation.ListOfFiles]: isEmpty,

  [Operation.PrintFile]: (args) => args.length === 1,

  [Operation.CreateFile]: (args) =>
    args.length === 1 && isValidFilename(args[0]),

  [Operation.RenameFile]: (args) =>
    args.length === 2 && isValidFilename(args[1]),

  [Operation.CopyFile]: (args) => args.length === 2,

  [Operation.MoveFile]: (args) => args.length === 2,

  [Operation.RemoveFile]: (args) => args.length === 1,

  [Operation.OS]: (args) => args.length === 1 && isValidOsArg(args[0]),

  [Operation.Hash]: (args) => args.length === 1,

  [Operation.Compress]: (args) => args.length === 2,

  [Operation.Decompress]: (args) => args.length === 2,
};

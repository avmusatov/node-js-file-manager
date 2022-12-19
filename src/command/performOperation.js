import { Operation, OsArg } from "../domains/command.js";
import { copyFile } from "../fs/copyFile.js";
import { createFile } from "../fs/createFile.js";
import { listOfFiles } from "../fs/listOfFiles.js";
import { printFile } from "../fs/printFile.js";
import { removeFile } from "../fs/removeFile.js";
import { renameFile } from "../fs/renameFile.js";
import { hash } from "../hash/hash.js";
import { changeDir } from "../navigation/changeDir.js";
import { up } from "../navigation/up.js";
import { architecture, endOfLine, username, cpus, homedir } from "../osInfo/osInfo.js";

export const performOperation = async (currentDir, operation, args) => {
  switch (operation) {
    case Operation.ListOfFiles:
      return await listOfFiles(currentDir);

    case Operation.Up:
      return up(currentDir);

    case Operation.ChangeDir:
      return await changeDir(currentDir, args[0]);

    case Operation.PrintFile:
      return printFile(currentDir, args[0]);

    case Operation.CreateFile:
      return createFile(currentDir, args[0]);

    case Operation.RenameFile:
      return renameFile(currentDir, args[0], args[1]);

    case Operation.CopyFile:
      return copyFile(currentDir, args[0], args[1]);

    case Operation.RemoveFile:
      return removeFile(currentDir, args[0]);

    case Operation.Hash:
      return await hash(currentDir, args[0]);

    case Operation.OS:
      if (args[0] === OsArg.Architecture) return architecture();
      if (args[0] === OsArg.Cpus) return cpus();
      if (args[0] === OsArg.Eol) return endOfLine();
      if (args[0] === OsArg.Homedir) return homedir();
      if (args[0] === OsArg.Username) return username();
      return;
  }
};

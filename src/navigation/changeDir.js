import { resolve } from "node:path";
import { homedir } from "node:os";
import { access } from "node:fs/promises";
import { constants } from "fs";

export const changeDir = async (currentDir, path) => {
  const resolved = resolve(currentDir, path);
  if (resolved.length < homedir().length) return currentDir;
  await access(resolved, constants.F_OK);
  return resolved;
};

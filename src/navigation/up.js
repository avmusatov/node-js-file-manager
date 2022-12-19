import { join } from "node:path";
import { homedir } from "node:os";

export const up = (currentDir) =>
  homedir() !== currentDir ? join(currentDir, "..") : currentDir;

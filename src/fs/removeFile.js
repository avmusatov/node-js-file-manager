import { rm } from "node:fs/promises";
import { join } from "node:path";

export const removeFile = async (currentDir, path) => {
  await rm(join(currentDir, path));
};

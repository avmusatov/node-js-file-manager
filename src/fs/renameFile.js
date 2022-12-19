import { rename } from "node:fs/promises";
import { join } from "node:path";

export const renameFile = async (currentDir, path, name) => {
  await rename(join(currentDir, path), join(currentDir, path, "..", name));
};

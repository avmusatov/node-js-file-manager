import { join } from "node:path";
import { writeFile } from "node:fs/promises";

export const createFile = async (currentDir, filename) => {
  await writeFile(join(currentDir, filename), "", { flag: "wx" });
};

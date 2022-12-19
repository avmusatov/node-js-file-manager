import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { lstat } from "node:fs/promises";

const sortByName = (first, second) => first.Name.localeCompare(second.Name);

export const listOfFiles = async (currentDir) => {
  const files = [];
  const dirs = [];

  const list = await readdir(currentDir);

  for (const Name of list) {
    const stats = await lstat(join(currentDir, Name));
    if (stats.isDirectory()) {
      dirs.push({ Name, Type: "directory" });
    } else {
      files.push({ Name, Type: "file" });
    }
  }

  dirs.sort(sortByName);
  files.sort(sortByName);

  console.table([...dirs, ...files]);
};

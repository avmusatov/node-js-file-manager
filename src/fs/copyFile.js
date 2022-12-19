import { createWriteStream, createReadStream } from "node:fs";
import { join, parse } from "node:path";

export const copyFile = (currentDir, pathToFile, pathToNewDir) => {
  const rs = createReadStream(join(currentDir, pathToFile));
  const ws = createWriteStream(
    join(currentPath, pathToNewDir, parse(pathToFile).base)
  );
  rs.pipe(ws);
};

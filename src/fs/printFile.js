import { join } from "node:path";
import { createReadStream } from "node:fs";

export const printFile = (currentDir, path) => {
  const rs = createReadStream(join(currentDir, path));
  rs.pipe(process.stdout);
};

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const hash = async (currentDir, path) => {
    const hash = createHash("sha256");
    console.log('path:::', join(currentDir, path));
    const content = await readFile(join(currentDir, path), {
      encoding: "utf-8",
    });
    hash.update(content);
    console.log(hash.digest("hex"));
};

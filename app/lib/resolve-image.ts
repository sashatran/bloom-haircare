import fs from "fs";
import path from "path";

const EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

/**
 * Given a path like "/images/products/shampoo", checks the public/ folder
 * for the first matching extension (.png, .jpg, .jpeg, .webp) and returns
 * the public URL. Falls back to .jpg if nothing is found.
 */
export function resolveImage(basePath: string): string {
  const publicDir = path.join(process.cwd(), "public");
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(publicDir, basePath + ext))) {
      return basePath + ext;
    }
  }
  return basePath + ".jpg";
}

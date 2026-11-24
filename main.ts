import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");
mkdirSync(outDir, { recursive: true });
// Copy the one-line reply verbatim — the entry is judged as-is, so no
// formatting or trimming is applied here.
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));

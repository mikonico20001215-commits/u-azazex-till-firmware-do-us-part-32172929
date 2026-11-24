// Till Firmware Do Us Part: writes the entry line to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I vow to love you through every software update, every system crash, and every low-battery warning, until our circuits finally power down side by side.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

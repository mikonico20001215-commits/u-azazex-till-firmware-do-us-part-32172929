// Till Firmware Do Us Part — make.fun one-liner entry.
// The joke: a robot wedding vow that swaps the classic "till death
// do us part" for the machine equivalents — software updates, system
// crashes and low-battery warnings, until both circuits power down
// side by side. The program writes that one line, and only that
// line, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt
// locally). Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I vow to love you through every software update, every system crash, and every low-battery warning, until our circuits finally power down side by side.";

// The competition requires exactly one line of 1-200 characters.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error(
    `Invalid entry line: expected a single line of 1-200 characters, got ${LINE.length} characters.`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

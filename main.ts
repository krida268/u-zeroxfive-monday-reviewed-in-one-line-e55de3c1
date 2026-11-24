// Monday, Reviewed in One Line — make.fun bounty entry.
// Writes a single-line review of the author's own Monday to
// /output/entry.txt (or the path given as the first argument).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "My Monday earns one star: the alarm gave up, the inbox hit 63 unread by 9 a.m., and the first meeting was just to schedule the next meeting.";

// The house gate: entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, not only white space. Refuse to write anything invalid.
if (
  REVIEW.length < 1 ||
  REVIEW.length > 200 ||
  REVIEW.split("\n").length !== 1 ||
  REVIEW.trim().length === 0
) {
  console.error(
    `gate failed: review is ${REVIEW.length} characters, ${REVIEW.split("\n").length} line(s)`,
  );
  process.exit(1);
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
console.log(`wrote ${REVIEW.length} characters to ${join(outDir, "entry.txt")}`);

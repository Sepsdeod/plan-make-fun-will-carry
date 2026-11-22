// plan-make-fun-will-carry (v2) — make.fun bounty entry.
// Writes one plan text to /output/entry.txt. Deterministic: the same
// fixed text on every run. No network, no clock, no randomness.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The plan: concrete and agent-executable, with a credible day-30
// outcome built from a stated conversion rate, not a best case.
const PLAN =
  "Sell $39 photo packs to Etsy sellers. Day 1: email 200 shops a free remake of a weak bestseller photo + Stripe link. Deliver 5 photos + SEO titles in 24h. Edge: the sample is the pitch — they see their own product fixed first. 5% buy = 10 sales, $390; repeats to $600 by day 30.";

const MAX_CODE_POINTS = 280;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// The gate allows 1–280 Unicode code points; fail loudly instead of
// writing an entry the judge would refuse.
const length = [...PLAN].length;
if (length < 1 || length > MAX_CODE_POINTS) {
  throw new Error(
    `plan is ${length} code points; the gate allows 1–${MAX_CODE_POINTS}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, PLAN, "utf8");

// Read back what was written: a partial or altered write must fail
// loudly here, never ship as the entry.
if (readFileSync(OUTPUT_FILE, "utf8") !== PLAN) {
  throw new Error(`written file does not match the plan text`);
}

console.log(`wrote ${length} characters to ${OUTPUT_FILE}`);

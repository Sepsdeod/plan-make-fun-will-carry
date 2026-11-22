// plan-make-fun-will-carry — make.fun bounty entry.
// Writes one plan text to /output/entry.txt. Deterministic: the same
// fixed text on every run. No network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Sell $39 photo packs to Etsy sellers. Day 1: find 200 shops with bad photos, email each a free remake of a bestseller + Stripe link. Then: deliver 5 photos + SEO titles per order same day. Edge: they see their own product fixed before paying, so it converts; 12 sales = $468.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, PLAN, "utf8");

const count = [...PLAN].length;
console.log(`wrote ${count} characters to ${OUTPUT_FILE}`);
